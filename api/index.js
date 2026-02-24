export default function handler(req, res) {
  const { url } = req

  // PAGASKA
  if (url.startsWith("/api/pagaska/anggota")) {
    return res.json({
      status: true,
      result: [{ nama: "Vex", jabatan: "Anggota PAGASKA" }]
    })
  }

  if (url.startsWith("/api/pagaska/jadwal")) {
    return res.json({
      status: true,
      result: "Latihan Sabtu 15:00"
    })
  }

  // ANIME (clean)
  if (url.startsWith("/api/anime/ainz"))
    return res.json({ status: true, result: "Ainz Search Active" })

  if (url.startsWith("/api/anime/nekopoi"))
    return res.json({ status: true, result: "Nekopoi Info" })

  if (url.startsWith("/api/anime/pixiv"))
    return res.json({ status: true, result: "Pixiv Image Proxy" })

  // MAKER
  if (url.startsWith("/api/maker/brat"))
    return res.json({ status: true, result: "Brat Generator" })

  if (url.startsWith("/api/maker/toburik"))
    return res.json({ status: true, result: "Low Quality Maker" })

  if (url.startsWith("/api/maker/removebg"))
    return res.json({ status: true, result: "Remove BG" })

  if (url.startsWith("/api/maker/smeme"))
    return res.json({ status: true, result: "Smeme Maker" })

  if (url.startsWith("/api/maker/upscale"))
    return res.json({ status: true, result: "AI Upscale" })

  // TOOLS
  if (url.startsWith("/api/tools/checkhost"))
    return res.json({ status: true, result: "Check Host" })

  if (url.startsWith("/api/tools/google-image"))
    return res.json({ status: true, result: "Google Image Search" })

  if (url.startsWith("/api/tools/kbbi"))
    return res.json({ status: true, result: "KBBI Search" })

  if (url.startsWith("/api/tools/ssweb"))
    return res.json({ status: true, result: "Website Screenshot" })

  // DOWNLOADER
  const downloaders = [
    "douyin", "facebook", "instagram",
    "mediafire", "spotify", "tiktok",
    "x", "youtube", "yt-post"
  ]

  for (let d of downloaders) {
    if (url.startsWith(`/api/downloader/${d}`))
      return res.json({ status: true, result: `${d} downloader active` })
  }

  // GAME STALKER
  const games = ["genshin", "hsr", "zzz"]

  for (let g of games) {
    if (url.startsWith(`/api/stalk/${g}`))
      return res.json({ status: true, result: `${g} profile data` })
  }

  return res.status(404).json({
    status: false,
    message: "Endpoint tidak ditemukan"
  })
}