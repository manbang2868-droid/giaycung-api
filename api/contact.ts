export default async function handler(req: any, res: any) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET")
    return res.status(405).json({ ok: false, message: "Method not allowed" });

  return res.status(200).json({
    ok: true,
    data: [
      {
        id: 1,
        name: "Giày Cưng – Quận 7",
        address: "301 Nguyễn Thị Thập, Quận 7",
        phone: "0909 255 285",
        email: "giaycungvn@gmail.com",
        hours: "08:00 - 21:00",
      },
    ],
  });
}
