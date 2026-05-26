import { StyleGuide, ToolItem } from "./types";

export const STYLE_GUIDES: StyleGuide[] = [
  {
    id: "ghibli-claymation",
    name: "Ghibli Claymation Style",
    desc: "Kombinasi ajaib antara detail Studio Ghibli yang hangat dengan tekstur clay buatan tangan bergaya stop-motion.",
    prompt:
      "Claymation Ghibli style, adorable little orange explorer cat wearing a miniature green backpack, whimsical magical village in green valley, hand-crafted clay texture, visible clay fingerprints, cute stop-motion vibe, warm studio lighting, cinematic masterpiece, soft shadow --ar 16:9",
    negativePrompt:
      "photorealistic, metal, plastic, digital CGI render, smooth skin, low quality, noise, draft",
    videoPrompt:
      "clay animation stop-motion, adorable little orange explorer cat moving and breathing in whimsical Ghibli village, clay deformation, 60fps cinematic look",
    category: "Claymation",
    imageUrl:
      "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/1e1e38/ffffff?text=Ghibli+Claymation+Style",
    creator: "GhibliStudioAI",
    tags: ["Handmade", "Nostalgia", "Cozy"],
  },
  {
    id: "3d-plushmation",
    name: "3D Plushmation Style",
    desc: "Karakter boneka kain berbulu halus (plushie) dengan animasi stop-motion 3D yang sangat lucu dan menggemaskan.",
    prompt:
      "3D plushmation animation, cute fluffy baby penguin plushie with a tiny red knitted scarf, detailed macro textile fabric texture, visible woolen sewing threads, warm nostalgic stop-motion look, cozy atmospheric ambient lighting --ar 16:9",
    negativePrompt:
      "sharp metallic elements, glass, ultra-sleek surfaces, realistic human skin",
    videoPrompt:
      "cute plush penguin toy walking with clumsy adorable steps, fabric texture wiggle, warm organic puppet animation",
    category: "3D/CGI",
    imageUrl:
      "https://images.unsplash.com/photo-1559251606-c623743a6d76?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/1e293b/ffffff?text=3D+Plushmation+Style",
    creator: "PlushMinds",
    tags: ["Soft", "Cute", "Cute Plush"],
  },
  {
    id: "stylized-3d-clay",
    name: "Stylized 3D Anime Clay",
    desc: "Karakter bergaya anime minimalis bertekstur clay semi-realistis yang bersinar dan tampak sangat bersih.",
    prompt:
      "Stylized 3D anime clay figurine of a futuristic cyberpunk girl with neon pink glasses, smooth play-doh clay render, pastel color palette, soft clean lines, cute expressive stylized face, professional virtual photography lighting --ar 16:9",
    negativePrompt:
      "rough clay, fingerprints, noise, detailed realistic anatomy, hyper-real",
    videoPrompt:
      "gentle camera rotation, 3d clay figurine of a cyberpunk anime girl morphing expression happily, smooth soft-shading ambient environment",
    category: "Claymation",
    imageUrl:
      "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/1e3a8a/ffffff?text=Stylized+3D+Anime+Clay",
    creator: "PlayStyle3D",
    tags: ["Minimalist", "Anime Figure", "Pastel"],
  },
  {
    id: "yellow-suburban",
    name: "Yellow Suburban Cartoon Style",
    desc: "Estetika kartun urban ikonik berwarna kuning cerah dengan outline tebal retro khas era keemasan animasi 90-an.",
    prompt:
      "Vibrant yellow suburban cartoon style, funny bearded man holding a giant glazed strawberry donut, clean hand-drawn art, bold black outlines, high-contrast flat saturation, classic cartoon background, quirky expressions, 90s animation retro vibe --ar 16:9",
    negativePrompt:
      "3D shading, realist, monochrome, blurred, smooth CGI gradients",
    videoPrompt:
      "comic cartoon walk of a bearded man, classic retro sound frame movement, comedic bounce",
    category: "2D/Cartoon",
    imageUrl:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/312e81/ffffff?text=Yellow+Suburban+Style",
    creator: "SimpsonizedAI",
    tags: ["90s", "Bold Outline", "Flat Art"],
  },
  {
    id: "lego-style",
    name: "LEGO Style",
    desc: "Dunia petualangan modular yang seluruh kawasannya disusun dari kotak-kotak plastik dan minifigur LEGO asli.",
    prompt:
      "Miniature blocky LEGO style scale model photography, brave retro gold astronaut minifigure, vibrant colored background built entirely with plastic toy bricks, gorgeous bokeh tilt-shift focus, shiny glossy surfaces --ar 16:9",
    negativePrompt:
      "paper craft, organic mud textures, real human skin, dark gothic painting",
    videoPrompt:
      "LEGO stop-motion animation, retro astronaut minifigure walking with block joints, bricks assembling around the moon scene, high speed clicky moves",
    category: "Stylized",
    imageUrl:
      "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/451a03/ffffff?text=LEGO+Style+Animation",
    creator: "BrickStudio",
    tags: ["Modular", "Bricks", "Stop-Motion"],
  },
  {
    id: "underwater-sponge",
    name: "Underwater Sponge Cartoon Style",
    desc: "Dunia bawah laut tropis bernuansa jenaka dengan coretan gelembung air, bunga langit cerah, dan palet warna tropis.",
    prompt:
      "Playful underwater hand-painted cartoon style, happy smiling pineapple-shaped submarine with bubble trails, neon watercolor seaweed, tropical sky background with hand-drawn flower clouds, high saturation retro submarine animation key art --ar 16:9",
    negativePrompt:
      "serious, realistic ocean, scary creatures, photorealism, dry land",
    videoPrompt:
      "subsea physics animation of a pineapple submarine, cartoon wiggle, funny wobbly motion, air bubbles popping upwards",
    category: "2D/Cartoon",
    imageUrl:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/0369a1/ffffff?text=Underwater+Sponge+Style",
    creator: "BikiniAI",
    tags: ["Aqua", "Watercolor", "Playful"],
  },
  {
    id: "skeleton-style",
    name: "Skeleton Style",
    desc: "Gaya gothic-playful bertema tengkorak bergaya komikal fantasi dengan pendaran neon ultraviolet yang memukau.",
    prompt:
      "Halloween spooky comical skeleton art style, cute animated bone skull figure playing an acoustic guitar, glowing neon purple bioluminescent lines, playful hand-drawn illustration style, eerie whimsical background --ar 16:9",
    negativePrompt:
      "boring medical skeleton, anatomy textbook, horror realism, plain design",
    videoPrompt:
      "bouncy dancing spooky bone figure strumming guitar, walking cycle, glowing ribcage animation, neon sparkles emitting",
    category: "Stylized",
    imageUrl:
      "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/311042/ffffff?text=Skeleton+Style+Gothic",
    creator: "Burtonesque",
    tags: ["Spooky", "Neon Glow", "Retro Halloween"],
  },
  {
    id: "3d-anime-japan",
    name: "3D Anime Japan Style",
    desc: "Visual film layar lebar modern Jepang cerah (cel-shaded 3D) dengan lens-flare romantis dan latar belakang kota megah.",
    prompt:
      "Modern highly aesthetic Japanese cell-shaded 3D anime movie style, anime high school girl holding a yellow umbrella under windy cherry blossom trees, cinematic golden-hour sunset flare, epic skies with dynamic clouds, lush detailing, colorful Tokyo scenery, Makoto Shinkai artistic visual look --ar 16:9",
    negativePrompt:
      "ugly CGI face, 3d mechanical render, clay texture, sketch, old vintage distortion",
    videoPrompt:
      "cinematic track-in shot, breeze blowing school girl hair and uniform, fluttering cherry petals, high fidelity cell animation with subtle ambient light leaks",
    category: "Anime",
    imageUrl:
      "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/0f172a/ffffff?text=3D+Anime+Japan+Style",
    creator: "NeoTokyoArt",
    tags: ["Cinematic", "Cel-Shaded", "Romantic"],
  },
  {
    id: "pixel-animation",
    name: "Pixel Animation Art Style",
    desc: "Estetika game 16-bit klasik dengan sprite animasi halus, warna neon vintage, dan lingkungan atmosferis yang sangat cozy.",
    prompt:
      "Ultra premium 16-bit retro cozy pixel art style, mystical glowing deer in a magical winter forest with fireflies, atmospheric ambient lighting, subtle particle sparkles in air, highly detailed scenery, cozy nostalgic gaming vibe --ar 16:9",
    negativePrompt:
      "vector art, high poly 3D, blur, smooth gradients, photograph, human hand",
    videoPrompt:
      "pixel-by-pixel floating snow particles animation, cozy deer breathing idle animation, nostalgic game interface sparks",
    category: "2D/Cartoon",
    imageUrl:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/172554/ffffff?text=Pixel+Animation+Art+Style",
    creator: "PixelWizard",
    tags: ["Cozy Gaming", "Retro 16-Bit", "Sparks"],
  },
  {
    id: "studio-ghibli-classic",
    name: "Studio Ghibli Inspired Style",
    desc: "Sentuhan lukisan kuas guas klasik bergaya pedesaan asri Jepang, padang rumput hijau menari, dan awan rindu yang tebal.",
    prompt:
      "Whimsical gorgeous Ghibli hand-painted aesthetic, giant fluffy forest spirit sleeping soundly under a colossal green leaf in deep serenity, lush wind-swept green meadow landscape, soft hand-drawn gouache masterwork style, fluffy glowing clouds, calm summer weather illustration --ar 16:9",
    negativePrompt:
      "computer vector, cyberpunk neon, sharp metallic shapes, digital perfection",
    videoPrompt:
      "deep meadow grass waving in soft warm wind, clouds shifting slowly horizontally, fluffy forest spirit belly breathing in beautiful warm sunshine",
    category: "Anime",
    imageUrl:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/064e3b/ffffff?text=Studio+Ghibli+Inspired+Style",
    creator: "NostalgicMinds",
    tags: ["Painted", "Peaceful", "Nature"],
  },
  {
    id: "dreamworks-3d",
    name: "Dreamwork Inspired 3D Animation",
    desc: "Visualisasi 3D bertekanan dinamis tinggi, ekspresi hiper-aktif jenaka, serta pementasan tata cahaya bioskop megah.",
    prompt:
      "DreamWorks-inspired stylized epic 3D theatrical animated render, cheeky little green dragon with golden wings blowing safe glitter sparkles, rich vibrant colorful layout, atmospheric volume light rays, adventure key art design --ar 16:9",
    negativePrompt:
      "gloomy dark horror, flat illustration, low dynamic range, static boring pose",
    videoPrompt:
      "heroic action camera panning, funny expression transformation of the little green dragon, playful animated gesture with soft fantasy wind",
    category: "3D/CGI",
    imageUrl:
      "https://images.unsplash.com/photo-1608889175123-8ec330b86f84?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/0284c7/ffffff?text=Dreamwork+Inspired+3D",
    creator: "EpicFantasyAI",
    tags: ["Adventure", "Cinematic 3D", "High Energy"],
  },
  {
    id: "pixar-3d",
    name: "Pixar Inspired 3D Animation",
    desc: "Kualitas render animasi 3D premium tingkat dunia dengan tekstur micro-believable, kedalaman emosi, dan pencahayaan lembut.",
    prompt:
      "Highly polished Pixar character visual render, friendly welcoming companion robot waving its mechanical hand, realistic fabrics and hair strands, signature soft warm subsurface scattering skin lighting, masterly cozy emotion scene storytelling --ar 16:9",
    negativePrompt:
      "scary, dark gothic style, low-resolution noise, flat coloring, 2d outline, distortion",
    videoPrompt:
      "friendly companion robot breathing, micro emotion eye blink and warm smile, ultra high-fidelity soft panning, gorgeous cinematic focus pull",
    category: "3D/CGI",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/581c87/ffffff?text=Pixar+Inspired+3D",
    creator: "MasterAnimation",
    tags: ["Masterpiece", "Emotion", "Warm Glow"],
  },
  {
    id: "aardman-clay",
    name: "Aardman Style Claymation",
    desc: "Gaya animasi stop-motion legendaris Inggris dengan tekstur plastisin tebal buatan tangan, senyum mulut lebar kocak.",
    prompt:
      "Aardman style stop-motion claymation, adorable funny fat sheep wearing a hand-knitted green wool sweater with classic wide grin human-like teeth, distinct fingerprints on colored plasticine clay surface, rustic handmade miniature interior workspace, colorful warm clay render --ar 16:9",
    negativePrompt:
      "perfect CGI, computer graphics, clean vector, dark dramatic scary themes",
    videoPrompt:
      "aardman stop-motion fat sheep blinking with clumsy comical head tilt, plasticine clay surface sparkling slightly under warm workshop lights",
    category: "Claymation",
    imageUrl:
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    placeholderUrl:
      "https://placehold.co/600x400/3f2b96/ffffff?text=Aardman+Style+Claymation",
    creator: "AardmanFanatic",
    tags: ["Quirky", "Stop-Motion", "English Handmade"],
  },
];

export const TOOLS_HUB_LIST: ToolItem[] = [
  {
    id: "chatgpt-custom",
    name: "ChatGPT Custom AI Studio",
    desc: "Chatbot AI cerdas untuk membantu mempercepat workflows, penulisan script, ide cerita, dan automasi AI studio.",
    btnText: "Open Tool",
    url: "https://chatgpt.com",
    category: "chat",
    status: "AI Power",
    badgeColor: "border-brand-cyan/40 text-brand-cyan bg-brand-cyan/10",
    iconType: "chat",
  },
  {
    id: "ai-anim-gpt",
    name: "AI Animation Studio GPT",
    desc: "AI assistant instan yang terprogram khusus membuat workflow animasi AI dari text sampai menjadi video utuh.",
    btnText: "Open Tool",
    url: "https://chatgpt.com",
    category: "animation",
    status: "Premium",
    badgeColor: "border-brand-violet/40 text-brand-violet bg-brand-violet/10",
    iconType: "bot",
  },
  {
    id: "canva-team",
    name: "Canva Team Workspace",
    desc: "Tool kolaborasi tim untuk menyusun storyboard, template persentasi animasi, visual board, dan asset editing bersama.",
    btnText: "Open Canva",
    url: "https://canva.com",
    category: "design",
    status: "Online",
    badgeColor: "border-emerald-400/40 text-emerald-400 bg-emerald-400/10",
    iconType: "google",
  },
  {
    id: "temp-email",
    name: "Temporary Email Utility",
    desc: "Generator email sementara aman dan cepat untuk mendaftar akun trial tools AI video eksperimen secara berkala.",
    btnText: "Open Temp Mail",
    url: "https://temp-mail.org",
    category: "utility",
    status: "Free Trial",
    badgeColor: "border-brand-pink/40 text-brand-pink bg-brand-pink/10",
    iconType: "mail",
  },
  {
    id: "leonardo-ai",
    name: "Leonardo AI Engine",
    desc: "Buat gambar karakter konsisten, landscape concept art, dan tekstur 3D dengan model generator gambar AI mutakhir.",
    btnText: "Open Leonardo",
    url: "https://leonardo.ai",
    category: "design",
    status: "AI Power",
    badgeColor: "border-brand-cyan/40 text-brand-cyan bg-brand-cyan/10",
    iconType: "leonardo",
  },
  {
    id: "google-ai-studio",
    name: "Google AI Studio Lab",
    desc: "Teknologi teks ke suara (TTS), integrasi model Gemini API mutakhir, dan eksperimen prompt canggih tanpa batas.",
    btnText: "Open Google AI Studio",
    url: "https://aistudio.google.com",
    category: "utility",
    status: "Free Trial",
    badgeColor: "border-amber-400/40 text-amber-400 bg-amber-400/10",
    iconType: "google",
  },
];
