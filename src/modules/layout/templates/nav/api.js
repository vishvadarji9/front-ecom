import { listRegions } from "@lib/data";

export default async function handler(req, res) {
  const regions = await listRegions();
  res.status(200).json(regions);
}


