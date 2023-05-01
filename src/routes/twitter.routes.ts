import { Request, Response, Router } from "express";
import { connectToDB } from "../db/client";

const router: Router = Router()

router.get("/tweets", async (req: Request, res: Response) => {
	const db = await connectToDB()
	const tweets = db.collection("tweets")

	const count = await db.collection("tweets").countDocuments()
	const documents = await tweets.find().toArray()

	const top10Agg = await tweets.aggregate([
		{ $match: { text: /#[^\s]+/ } }, // filter only tweets with hashtags
		{ $unwind: "$entities.hashtags" }, // unwind the array of hashtags
		{ $group: { _id: "$entities.hashtags.text", count: { $sum: 1 } } }, // group by hashtag text and count occurrences
		{ $sort: { count: -1 } }, // sort by count descending
		{ $limit: 10 } // limit to the top 10 hashtags
	]).toArray()

	res.json({
		count,
		top10Agg
	})
})

export default router
