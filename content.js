// ═══════════════════════════════════════════════════════
//  QALB v2 — content.js
//  All Quran verses, Hadith (6 major books), Duas,
//  Allah's Names & Adhkar per mood
// ═══════════════════════════════════════════════════════

const moodMeta = {
  sad:        { emoji:'😔', label:'Sad & Heavy' },
  anxious:    { emoji:'😰', label:'Anxious & Worried' },
  lost:       { emoji:'🌫️', label:'Lost & Confused' },
  grateful:   { emoji:'🤲', label:'Grateful & Blessed' },
  lonely:     { emoji:'🌙', label:'Lonely & Distant' },
  angry:      { emoji:'🌊', label:'Angry & Frustrated' },
  hopeless:   { emoji:'🕯️', label:'Hopeless & Tired' },
  guilty:     { emoji:'🌿', label:'Guilty & Seeking Forgiveness' },
  happy:      { emoji:'☀️', label:'Happy & Content' },
  grief:      { emoji:'🫀', label:'Grieving a Loss' },
  sick:       { emoji:'🌡️', label:'Sick & In Pain' },
  stressed:   { emoji:'⚡', label:'Overwhelmed & Stressed' },
  imaan:      { emoji:'📿', label:'Low Imaan & Spiritually Empty' },
  heartbreak: { emoji:'💔', label:'Heartbroken' },
  fearful:    { emoji:'🌑', label:'Fearful & Scared' },
  jealous:    { emoji:'🍂', label:'Envious & Comparing' },
  seeking:    { emoji:'🔍', label:'Seeking Guidance & Purpose' },
  struggling: { emoji:'⛰️', label:'Struggling Financially' },
};

const moodContent = {

  sad: [
    {
      quran: { arabic:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', transliteration:'Alā bi-dhikri llāhi taṭmaʾinnu l-qulūb', translation:'Verily, in the remembrance of Allah do hearts find rest.', source:'Surah Ar-Ra'd 13:28' },
      hadith: { text:'The Prophet ﷺ said: "No fatigue, nor disease, nor sorrow, nor sadness, nor hurt, nor distress befalls a Muslim — even if it were the prick of a thorn — except that Allah expiates some of his sins for that."', source:'Sahih al-Bukhari 5641' },
      dua: { arabic:'اللّهُمَّ إِنِّي عَبْدُكَ، ابْنُ عَبْدِكَ، ابْنُ أَمَتِكَ، نَاصِيَتِي بِيَدِكَ، مَاضٍ فِيَّ حُكْمُكَ، عَدْلٌ فِيَّ قَضَاؤُكَ، أَسْأَلُكَ بِكُلِّ اسْمٍ هُوَ لَكَ', transliteration:'Allāhumma innī ʿabduk, ibnu ʿabdik, ibnu amatik, nāṣiyatī biyadik, māḍin fiyya ḥukmuk, ʿadlun fiyya qaḍāʾuk, asʾaluka bikulli ismin huwa lak', translation:'O Allah, I am Your servant, son of Your servant. My forelock is in Your hand. Your command over me is forever executed, Your decree is just. I ask You by every name You have named Yourself with.', source:'Dua of Distress — Sahih al-Bukhari, narrated by Ibn Masud' },
      allahName: { arabic:'يَا لَطِيف', latin:'Ya Lateef', meaning:'The Subtle, The Most Gentle', relevance:'He is Al-Lateef — He knows the finest details of your sadness and reaches you with His gentleness in ways you may not even notice.' },
      reflection:'Your sadness is not a sign that Allah has abandoned you. It is in the moments of weeping that the heart is most open to Him. Pour it out in sujood — He is listening to every word.'
    },
    {
      quran: { arabic:'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', transliteration:'Wa lasawfa yuʿṭīka rabbuka fatarḍā', translation:'And your Lord is going to give you, and you will be satisfied.', source:'Surah Ad-Duha 93:5' },
      hadith: { text:'The Prophet ﷺ said: "How wonderful is the affair of the believer, for his affairs are all good. If something good happens to him, he is thankful — and that is good for him. If something bad happens to him, he bears it with patience — and that too is good for him."', source:'Sahih Muslim 2999' },
      dua: { arabic:'اللَّهُمَّ رَحْمَتَكَ أَرْجُو فَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ وَأَصْلِحْ لِي شَأْنِي كُلَّهُ', transliteration:'Allāhumma raḥmataka arjū falā takilnī ilā nafsī ṭarfata ʿayn, wa aṣliḥ lī shaʾnī kullahu', translation:'O Allah, it is Your mercy that I hope for, so do not leave me in charge of my own affairs even for the blink of an eye, and rectify all my affairs.', source:'Abu Dawud 5090, Hasan' },
      allahName: { arabic:'يَا مُجِيب', latin:'Ya Mujeeb', meaning:'The Responsive, The Answerer of Prayers', relevance:'He is Al-Mujeeb — every dua you make in the dark, He hears. Your cry does not go unheard.' },
      reflection:'This phase will pass. After the Duha comes the Suha. After hardship comes ease — not maybe, but as a firm promise from Allah Himself.'
    },
    {
      quran: { arabic:'لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', transliteration:'Lā ilāha illā anta subḥānaka innī kuntu mina ẓ-ẓālimīn', translation:'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.', source:'Surah Al-Anbiya 21:87 — Dua of Yunus ع from inside the whale' },
      hadith: { text:'The Prophet ﷺ said: "The supplication of my brother Dhun-Nun (Yunus) who called upon Allah while in the belly of the whale — no Muslim man supplicates with it for any matter except Allah responds to him."', source:'Sunan al-Tirmidhi 3505, Sahih' },
      dua: { arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ، وَالْعَجْزِ وَالْكَسَلِ', transliteration:'Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wal-ʿajzi wal-kasal', translation:'O Allah, I seek refuge in You from grief and sadness, and from weakness and laziness.', source:'Sahih al-Bukhari 6369' },
      allahName: { arabic:'يَا قَرِيب', latin:'Ya Qareeb', meaning:'The Near One', relevance:'He is Al-Qareeb — closer to you than your own jugular vein. In your deepest sadness, He is right there.' },
      reflection:'Even Yunus عليه السلام called from the deepest darkness — belly of a whale, depths of the ocean, middle of the night. And Allah heard him immediately. Your cry will be heard too.'
    }
  ],

  anxious: [
    {
      quran: { arabic:'وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ', transliteration:'Wa ʿasā an takrahū shayʾan wa huwa khayrun lakum, wallāhu yaʿlamu wa antum lā taʿlamūn', translation:'And it may be that you dislike a thing which is good for you, and it may be that you love a thing which is bad for you. Allah knows and you do not know.', source:'Surah Al-Baqarah 2:216' },
      hadith: { text:'The Prophet ﷺ said: "Know that if the whole world gathered to benefit you in something, they would not benefit you except in what Allah had already decreed for you. And if they gathered to harm you, they would not harm you except in what Allah had decreed against you."', source:'Sunan al-Tirmidhi 2516, Sahih' },
      dua: { arabic:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', transliteration:'Ḥasbunallāhu wa niʿmal-wakīl', translation:'Allah is sufficient for us, and He is the best Disposer of affairs.', source:'Quran 3:173 — said by Ibrahim ع as he was thrown into the fire' },
      allahName: { arabic:'يَا وَكِيل', latin:'Ya Wakeel', meaning:'The Trustee, The Disposer of Affairs', relevance:'Hand your anxiety over to Al-Wakeel. He manages the affairs of the entire universe — surely He can manage yours.' },
      reflection:'Anxiety lives in an imagined future. Tawakkul brings you back to the present moment with Allah. Breathe. Make wudu. Pray two rakaahs. He is closer than your jugular vein.'
    },
    {
      quran: { arabic:'أَلَيْسَ اللَّهُ بِكَافٍ عَبْدَهُ', transliteration:'Alaysa llāhu bi-kāfin ʿabdah', translation:'Is Allah not sufficient for His servant?', source:'Surah Az-Zumar 39:36' },
      hadith: { text:'The Prophet ﷺ said: "Whoever among you wakes up in the morning safe in his home, healthy in his body, and has food for that day — it is as if the whole world has been given to him."', source:'Sunan al-Tirmidhi 2346, Hasan' },
      dua: { arabic:'اللَّهُمَّ لَا سَهْلَ إِلَّا مَا جَعَلْتَهُ سَهْلًا وَأَنْتَ تَجْعَلُ الْحَزْنَ إِذَا شِئْتَ سَهْلًا', transliteration:'Allāhumma lā sahla illā mā jaʿaltahu sahlān, wa anta tajʿalul-ḥazna idhā shiʾta sahlā', translation:'O Allah, nothing is easy except what You have made easy, and You can make the difficult easy if You wish.', source:'Ibn Hibban, Sahih' },
      allahName: { arabic:'يَا حَسِيب', latin:'Ya Haseeb', meaning:'The Sufficient, The Reckoner', relevance:'Al-Haseeb is sufficient for all your needs. You do not need to carry this weight alone.' },
      reflection:'The thing you fear has not happened yet. And if it does, Allah will give you the strength to handle it then. Right now, He only asks you to trust Him today.'
    }
  ],

  lost: [
    {
      quran: { arabic:'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ', transliteration:'Wa idhā saʾalaka ʿibādī ʿannī fa-innī qarīb. Ujību daʿwata d-dāʿi idhā daʿān.', translation:'And when My servants ask you concerning Me — indeed I am near. I respond to the invocation of the supplicant when he calls upon Me.', source:'Surah Al-Baqarah 2:186' },
      hadith: { text:'The Prophet ﷺ narrated Allah saying: "I am as My servant thinks I am. I am with him when he makes mention of Me. If he makes mention of Me to himself, I make mention of him to Myself; and if he makes mention of Me in an assembly, I make mention of him in an assembly better than it."', source:'Sahih al-Bukhari 7405' },
      dua: { arabic:'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي', transliteration:'Rabbi sh-raḥ lī ṣadrī wa yassir lī amrī waḥlul ʿuqdatan min lisānī yafqahū qawlī', translation:'My Lord, expand my chest, ease my task, and untie the knot from my tongue that they may understand my speech.', source:'Quran 20:25-28 — Dua of Musa ع before Pharaoh' },
      allahName: { arabic:'يَا هَادِي', latin:'Ya Haadi', meaning:'The Guide', relevance:'Al-Haadi is the one who guides hearts. Ask Him directly — He guided prophets through their most confusing moments.' },
      reflection:'Even Musa عليه السلام stood confused and afraid before Pharaoh. Yet he called upon Allah — and clarity came. Your guidance is one sincere call away.'
    },
    {
      quran: { arabic:'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ', transliteration:'Wa man yattaqi llāha yajʿal lahu makhrajā. Wa yarzuqhu min ḥaythu lā yaḥtasib.', translation:'And whoever fears Allah — He will make for him a way out. And will provide for him from where he does not expect.', source:'Surah At-Talaq 65:2-3' },
      hadith: { text:'The Prophet ﷺ said: "Be mindful of Allah and He will protect you. Be mindful of Allah and you will find Him before you. When you ask, ask Allah. When you seek help, seek help from Allah."', source:'Sunan al-Tirmidhi 2516, Sahih' },
      dua: { arabic:'اللَّهُمَّ اهْدِنِي وَسَدِّدْنِي', transliteration:'Allāhumma hdinī wa saddidnī', translation:'O Allah, guide me and make me upright.', source:'Sahih Muslim 2725' },
      allahName: { arabic:'يَا رَشِيد', latin:'Ya Rasheed', meaning:'The Guide to the Right Path', relevance:'Al-Rasheed guides every matter to its right conclusion. He knows where you are meant to be, even when you do not.' },
      reflection:'Being lost is not the end of the road — sometimes it is the beginning of the right one. Perhaps what you thought was your path was not your destination. Trust the Planner of the journey.'
    }
  ],

  grateful: [
    {
      quran: { arabic:'لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ', transliteration:'La-in shakartum la-azīdannakum, wa la-in kafartum inna ʿadhābī lashadīd', translation:'If you are grateful, I will surely increase you in favor. But if you are ungrateful, indeed My punishment is severe.', source:'Surah Ibrahim 14:7' },
      hadith: { text:'The Prophet ﷺ said: "Whoever does not thank people has not thanked Allah." He also stood in night prayer until his feet swelled. When asked why, he replied: "Should I not be a grateful servant?"', source:'Abu Dawud 4811 & Sahih al-Bukhari 1130' },
      dua: { arabic:'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ', transliteration:'Allāhumma aʿinnī ʿalā dhikrika wa shukrika wa ḥusni ʿibādatik', translation:'O Allah, help me to remember You, to give thanks to You, and to worship You in an excellent manner.', source:'Abu Dawud 1522, Sahih — taught by the Prophet ﷺ to Muadh ibn Jabal' },
      allahName: { arabic:'يَا شَكُور', latin:'Ya Shakoor', meaning:'The Appreciative, The Grateful', relevance:'Allah Himself is Ash-Shakoor — He appreciates every small act of goodness you do and multiplies the reward abundantly.' },
      reflection:'Gratitude is not just a feeling — it is an action and a form of worship. Today, make a sajdah of shukr. Name each blessing out loud. Then share that light with someone who needs it.'
    }
  ],

  lonely: [
    {
      quran: { arabic:'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ ۚ وَاللَّهُ بِمَا تَعْمَلُونَ بَصِيرٌ', transliteration:'Wa huwa maʿakum ayna mā kuntum, wallāhu bimā taʿmalūna baṣīr', translation:'And He is with you wherever you are. And Allah sees all that you do.', source:'Surah Al-Hadid 57:4' },
      hadith: { text:'The Prophet ﷺ said: "Allah says: I am as My servant expects Me to be, and I am with him when he calls upon Me." He also said loneliness can be healed through salah, for in it you speak directly to Allah.', source:'Sahih al-Bukhari 7405 & related narrations' },
      dua: { arabic:'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلَا تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ', transliteration:'Yā Ḥayyu yā Qayyūmu bi-raḥmatika astaghīth, aṣliḥ lī shaʾnī kullahu wa lā takilnī ilā nafsī ṭarfata ʿayn', translation:'O Ever-Living, O Sustainer of existence — by Your mercy I seek help. Rectify all my affairs and do not leave me to myself for the blink of an eye.', source:'Sunan al-Tirmidhi 3524, Sahih' },
      allahName: { arabic:'يَا أَنِيس', latin:'Ya Anees', meaning:'The Intimate Companion', relevance:'Allah is Al-Anees — the closest of companions. He is never far, never too busy, never asleep. You have the best company.' },
      reflection:'You are never truly alone. He is Al-Qarib — the Near One. The longing in your heart that nothing in this dunya can fill? That longing is His invitation to return to Him.'
    }
  ],

  angry: [
    {
      quran: { arabic:'وَإِذَا مَا غَضِبُوا هُمْ يَغْفِرُونَ', transliteration:'Wa idhā mā ghaḍibū hum yaghfirūn', translation:'And when they are angry, they forgive.', source:'Surah Ash-Shura 42:37 — describing the believers' },
      hadith: { text:'A man came to the Prophet ﷺ and asked for advice. He said: "Do not become angry." The man repeated his request several times, and each time the Prophet ﷺ replied: "Do not become angry."', source:'Sahih al-Bukhari 6116' },
      dua: { arabic:'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ', transliteration:'Aʿūdhu billāhi mina sh-shayṭāni r-rajīm', translation:'I seek refuge in Allah from the accursed Shaytan.', source:'Sahih al-Bukhari 3282 — specifically prescribed by the Prophet ﷺ as a remedy for anger' },
      allahName: { arabic:'يَا حَلِيم', latin:'Ya Haleem', meaning:'The Forbearing, The Most Patient', relevance:'Allah is Al-Haleem — He never reacts out of anger, even when we sin repeatedly. Call upon His quality of forbearance.' },
      reflection:'The Prophet ﷺ said the strong person is not the one who wrestles others down — it is the one who controls themselves in anger. This moment is your test of true strength. You can pass it.'
    },
    {
      quran: { arabic:'ادْفَعْ بِالَّتِي هِيَ أَحْسَنُ فَإِذَا الَّذِي بَيْنَكَ وَبَيْنَهُ عَدَاوَةٌ كَأَنَّهُ وَلِيٌّ حَمِيمٌ', transliteration:'Idfaʿ billatī hiya aḥsanu fa-idhā lladhī baynaka wa baynahū ʿadāwatun kaʾannahu waliyyun ḥamīm', translation:'Repel evil with that which is better — and the one between you and whom there was enmity will become as though he were a devoted friend.', source:'Surah Fussilat 41:34' },
      hadith: { text:'The Prophet ﷺ said: "If one of you becomes angry when standing, let him sit down. If the anger leaves him, fine; otherwise let him lie down." He also said: "Anger is an ember from Shaytan."', source:'Sunan Abu Dawud 4782, Sahih & Musnad Ahmad' },
      dua: { arabic:'اللَّهُمَّ اغْفِرْ لِي ذَنْبِي وَأَذْهِبْ غَيْظَ قَلْبِي', transliteration:'Allāhumma gh-fir lī dhambī wa adhhib ghayẓa qalbī', translation:'O Allah, forgive my sins and remove the rage from my heart.', source:'Recommended by Islamic scholars based on prophetic narrations' },
      allahName: { arabic:'يَا عَفُوّ', latin:'Ya ʿAfuww', meaning:'The Pardoner', relevance:'Al-Afu pardons completely — the sin is erased as if it never happened. Ask Him to pardon whoever wronged you, and to pardon you too.' },
      reflection:'Sit down. Drink water. Make wudu. The Prophet ﷺ gave us physical remedies for anger before anything else. Your body knows what your anger does not: this will pass.'
    }
  ],

  hopeless: [
    {
      quran: { arabic:'لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ', transliteration:'Lā taqnaṭū min raḥmati llāh, innallāha yaghfiru dh-dhunūba jamīʿā, innahu huwa l-Ghafūru r-Raḥīm', translation:'Do not despair of the mercy of Allah. Indeed, Allah forgives all sins. Indeed, it is He who is the Forgiving, the Merciful.', source:'Surah Az-Zumar 39:53' },
      hadith: { text:'The Prophet ﷺ said: "Allah is more delighted with the repentance of His servant than one of you would be upon finding your lost camel in a barren desert."', source:'Sahih al-Bukhari 6308, Sahih Muslim 2747' },
      dua: { arabic:'رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ', transliteration:'Rabbi innī massaniya ḍ-ḍurru wa anta arḥamu r-rāḥimīn', translation:'My Lord, adversity has touched me, and You are the Most Merciful of the merciful.', source:'Quran 21:83 — Dua of Ayyub ع after years of suffering' },
      allahName: { arabic:'يَا فَتَّاح', latin:'Ya Fattaah', meaning:'The Opener of Doors', relevance:'Al-Fattaah opens doors that seem permanently closed. He opens hearts, provisions, and paths — no door is shut to Him.' },
      reflection:'Ayyub عليه السلام lost his wealth, his health, and his family — for years. Yet he never lost hope in Allah. And Allah restored everything and more. Your darkest chapter is not your final one.'
    }
  ],

  guilty: [
    {
      quran: { arabic:'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَىٰ أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا', transliteration:'Qul yā ʿibādiya lladhīna asrafū ʿalā anfusihim lā taqnaṭū min raḥmati llāh, innallāha yaghfiru dh-dhunūba jamīʿā', translation:'Say: O My servants who have transgressed against themselves — do not despair of the mercy of Allah. Indeed, Allah forgives all sins.', source:'Surah Az-Zumar 39:53' },
      hadith: { text:'The Prophet ﷺ said: "Every son of Adam sins, and the best of sinners are those who repent." He also narrated Allah saying: "O son of Adam, so long as you call upon Me and put your hope in Me, I will forgive you no matter what you have done."', source:'Sunan al-Tirmidhi 2499, Hasan & Sunan al-Tirmidhi 3540' },
      dua: { arabic:'اللَّهُمَّ أَنتَ رَبِّي لَا إِلَهَ إِلَّا أَنتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ وَأَبُوءُ بِذَنبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنتَ', transliteration:'Allāhumma anta rabbī lā ilāha illā anta khalaqtanī wa ana ʿabduk, ana ʿalā ʿahdika wa waʿdika mastaṭaʿtu, aʿūdhu bika min sharri mā ṣanaʿtu, abūʾu laka bi-niʿmatika ʿalayya wa abūʾu bi-dhanbī, faghfir lī fa-innahu lā yaghfiru dh-dhunūba illā ant', translation:'O Allah, You are my Lord, there is no god but You. You created me and I am Your servant. I am upon Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favour upon me and I acknowledge my sin, so forgive me — for none forgives sins but You.', source:'Sayyid al-Istighfar — The Master Supplication for Forgiveness — Sahih al-Bukhari 6306' },
      allahName: { arabic:'يَا تَوَّاب', latin:'Ya Tawwaab', meaning:'The Ever-Accepting of Repentance', relevance:'Al-Tawwaab turns toward His servant in forgiveness, again and again, every time they return to Him. There is no limit to His acceptance.' },
      reflection:'The feeling of guilt means your heart is still alive and connected to Allah. Shaytan wants your guilt to paralyze you. Allah wants it to propel you — back to Him, through sincere tawbah.'
    }
  ],

  happy: [
    {
      quran: { arabic:'فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ', transliteration:'Fadhkurūnī adhkurkum wash-kurū lī wa lā takfurūn', translation:'So remember Me; I will remember you. And be grateful to Me and do not deny Me.', source:'Surah Al-Baqarah 2:152' },
      hadith: { text:'The Prophet ﷺ said: "When Allah bestows a blessing on a servant and the servant says Alhamdulillah — that which he gave in thanks is better than what he received." He also smiled frequently and said: "Smiling at your brother is charity."', source:'Sunan Ibn Majah 3805, Hasan & Sahih al-Bukhari 2989' },
      dua: { arabic:'اللَّهُمَّ مَا أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيكَ لَكَ فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ', transliteration:'Allāhumma mā aṣbaḥa bī min niʿmatin aw bi-aḥadin min khalqika, fa-minka waḥdaka lā sharīka laka, falaka l-ḥamdu wa laka sh-shukr', translation:'O Allah, whatever blessing I or any of Your creation have received — it is from You alone, with no partner. All praise and gratitude belong to You.', source:'Abu Dawud 5073, Sahih — whoever says this has fulfilled the gratitude of that day' },
      allahName: { arabic:'يَا مُنْعِم', latin:'Ya Munʿim', meaning:'The Bestower of Blessings', relevance:'Al-Munʿim is the one who gave you this happiness. Recognize the Giver behind every gift.' },
      reflection:'Happiness is a gift and a test. Protect it with gratitude and share it generously. The Prophet ﷺ smiled often and said smiling is charity. Let your joy be worship.'
    }
  ],

  grief: [
    {
      quran: { arabic:'إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ', transliteration:'Innā lillāhi wa innā ilayhi rājiʿūn', translation:'Indeed, we belong to Allah, and indeed to Him we will return.', source:'Surah Al-Baqarah 2:156' },
      hadith: { text:'The Prophet ﷺ wept at the death of his son Ibrahim and said: "The eyes weep and the heart grieves, but we do not say anything except what pleases our Lord. And indeed, O Ibrahim, we are grieved by your departure."', source:'Sahih al-Bukhari 1303' },
      dua: { arabic:'اللَّهُمَّ اغْفِرْ لَهُ وَارْفَعْ دَرَجَتَهُ فِي الْمَهْدِيِّينَ وَاخْلُفْهُ فِي عَقِبِهِ فِي الْغَابِرِينَ وَاغْفِرْ لَنَا وَلَهُ يَا رَبَّ الْعَالَمِينَ', transliteration:'Allāhumma gh-fir lahu warfaʿ darajatahu fil-mahdiyyīn, wakhlufhu fī ʿaqibihi fil-ghābirīn, waghfir lanā wa lahu yā rabba l-ʿālamīn', translation:'O Allah, forgive him, elevate his rank among the rightly guided, and grant goodness to those he left behind. Forgive us and him, O Lord of the worlds.', source:'Sahih Muslim 963 — dua for the deceased' },
      allahName: { arabic:'يَا صَبُور', latin:'Ya Saboor', meaning:'The Most Patient', relevance:'As-Saboor bears all things with infinite patience. He understands your grief fully — He took from you something He gave. Call upon His patience.' },
      reflection:'The Prophet ﷺ himself wept when his son died. Grief is not weakness — it is love. Cry your tears, they are honoured by Allah. And know that those who leave us are in His care.'
    }
  ],

  sick: [
    {
      quran: { arabic:'وَإِذَا مَرِضْتُ فَهُوَ يَشْفِينِ', transliteration:'Wa idhā mariḍtu fahuwa yashfīn', translation:'And when I am ill, it is He who cures me.', source:'Surah Ash-Shuara 26:80 — words of Ibrahim ع' },
      hadith: { text:'The Prophet ﷺ said: "There is no disease that Allah has created, except that He also has created its treatment." He also said: "Be patient, for indeed patience is a light."', source:'Sahih al-Bukhari 5678 & Sahih Muslim 223' },
      dua: { arabic:'اللَّهُمَّ رَبَّ النَّاسِ أَذْهِبِ الْبَأْسَ اشْفِ أَنْتَ الشَّافِي لَا شِفَاءَ إِلَّا شِفَاؤُكَ شِفَاءً لَا يُغَادِرُ سَقَمًا', transliteration:'Allāhumma rabb an-nāsi adhhib il-baʾs, ishfi anta sh-Shāfī, lā shifāʾa illā shifāʾuk, shifāʾan lā yughādiru saqamā', translation:'O Allah, Lord of mankind, remove the harm. Heal — You are the Healer. There is no healing except Your healing, a healing that leaves no illness behind.', source:'Sahih al-Bukhari 5743, Sahih Muslim 2191 — the Prophet ﷺ recited this over the sick' },
      allahName: { arabic:'يَا شَافِي', latin:'Ya Shaafi', meaning:'The Healer', relevance:'As-Shaafi is the ultimate Healer. No medicine heals without His permission. Go to the doctor, take the medicine — and ask Al-Shaafi to make it work.' },
      reflection:'The Prophet ﷺ said every illness expiates sins. Your sickness is not punishment — it may be purification, elevation, and mercy. Hang on with patience, ya habib.'
    }
  ],

  stressed: [
    {
      quran: { arabic:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا', transliteration:'Fa-inna maʿal-ʿusri yusrā. Inna maʿal-ʿusri yusrā.', translation:'For indeed, with hardship will be ease. Indeed, with hardship will be ease.', source:'Surah Ash-Sharh 94:5-6' },
      hadith: { text:'The Prophet ﷺ said: "Whoever makes the Hereafter his concern, Allah will make richness in his heart, bring his affairs together, and the world will come to him as it was destined. Whoever makes the world his concern, Allah will put poverty in front of his eyes and disorganise his affairs."', source:'Sunan al-Tirmidhi 2465, Sahih' },
      dua: { arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ وَالْعَجْزِ وَالْكَسَلِ وَالْبُخْلِ وَالْجُبْنِ وَضَلَعِ الدَّيْنِ وَغَلَبَةِ الرِّجَالِ', transliteration:'Allāhumma innī aʿūdhu bika minal-hammi wal-ḥazan, wal-ʿajzi wal-kasal, wal-bukhli wal-jubn, wa ḍalaʿid-dayn wa ghalabatir-rijāl', translation:'O Allah, I seek refuge in You from anxiety and grief, weakness and laziness, miserliness and cowardice, and from being overpowered by debt and men.', source:'Sahih al-Bukhari 6369 — the Prophet ﷺ recited this daily' },
      allahName: { arabic:'يَا كَافِي', latin:'Ya Kaafi', meaning:'The All-Sufficient', relevance:'Al-Kaafi is enough. He is sufficient for every burden you carry. You do not need to solve everything today.' },
      reflection:'Allah said it twice in the same breath — WITH hardship comes ease. Not after, but WITH it. The ease is already present in your difficulty. You are not behind. You are exactly where He wills.'
    }
  ],

  imaan: [
    {
      quran: { arabic:'أَلَمْ يَأْنِ لِلَّذِينَ آمَنُوا أَن تَخْشَعَ قُلُوبُهُمْ لِذِكْرِ اللَّهِ', transliteration:'Alam yaʾni lladhīna āmanū an takhshaʿa qulūbuhum lidhikri llāh', translation:'Has the time not come for those who have believed that their hearts should become humbly submissive at the remembrance of Allah?', source:'Surah Al-Hadid 57:16' },
      hadith: { text:'The Prophet ﷺ said: "Faith wears out in your hearts just as clothes wear out. So ask Allah to renew faith in your hearts." He also said: "The hearts are between two fingers of Ar-Rahman — He turns them as He wills."', source:'Al-Hakim, authenticated & Sahih Muslim 2654' },
      dua: { arabic:'يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ', transliteration:'Yā muqallib al-qulūbi thabbit qalbī ʿalā dīnik', translation:'O Turner of hearts, keep my heart firm upon Your religion.', source:'Sunan al-Tirmidhi 3522, Sahih — the Prophet ﷺ recited this frequently' },
      allahName: { arabic:'يَا مُقَلِّب الْقُلُوب', latin:'Ya Muqallib al-Quloob', meaning:'The Turner of Hearts', relevance:'He controls every heart. Ask Him to turn yours back to life. This dua is literally "O Turner of Hearts" — He answers it.' },
      reflection:'Imaan has seasons. The Sahaba experienced this too — they asked the Prophet ﷺ about feeling low in faith and he comforted them. This valley is part of the journey. Keep showing up.'
    }
  ],

  heartbreak: [
    {
      quran: { arabic:'عَسَىٰ أَن تَكْرَهُوا شَيْئًا وَيَجْعَلَ اللَّهُ فِيهِ خَيْرًا كَثِيرًا', transliteration:'ʿAsā an takrahū shayʾan wa yajʿala llāhu fīhi khayran kathīrā', translation:'Perhaps you hate a thing and Allah makes therein much good.', source:'Surah An-Nisa 4:19' },
      hadith: { text:'The Prophet ﷺ said: "If Allah loves a people, He tests them. Whoever accepts it receives His pleasure, and whoever is discontent receives His wrath." He also said: "Allah never decrees anything for a believer except it is good for him."', source:'Sunan al-Tirmidhi 2396, Hasan & Sahih Muslim 2999' },
      dua: { arabic:'اللَّهُمَّ إِنِّي أَسْأَلُكَ حُبَّكَ وَحُبَّ مَنْ يُحِبُّكَ وَحُبَّ عَمَلٍ يُقَرِّبُنِي إِلَى حُبِّكَ', transliteration:'Allāhumma innī asʾaluka ḥubbaka wa ḥubba man yuḥibbuka wa ḥubba ʿamalin yuqarribunī ilā ḥubbik', translation:'O Allah, I ask You for Your love, and the love of those who love You, and the love of deeds that bring me closer to Your love.', source:'Sunan al-Tirmidhi 3235, Sahih' },
      allahName: { arabic:'يَا جَابِر', latin:'Ya Jaabir', meaning:'The Restorer, The Repairer', relevance:'Al-Jaabir mends what is broken. No heart is beyond His repair. He is the One who can replace what you lost with something far greater.' },
      reflection:'What broke your heart may have been protecting you from something worse. Or preparing you for something better. Allah sees the full picture — you see only this moment. Trust His view.'
    }
  ],

  fearful: [
    {
      quran: { arabic:'أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', transliteration:'Alā inna awliyāʾa llāhi lā khawfun ʿalayhim wa lā hum yaḥzanūn', translation:'Unquestionably, for the allies of Allah there will be no fear concerning them, nor will they grieve.', source:'Surah Yunus 10:62' },
      hadith: { text:'The Prophet ﷺ said: "Protect yourself from the Fire, even with half a date. If you cannot, then with a kind word." He also said: "Seek the protection of Allah, for truly His protection is greater than anything."', source:'Sahih al-Bukhari 6023 & related narrations' },
      dua: { arabic:'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْفَقْرِ وَالْقِلَّةِ وَالذِّلَّةِ وَأَعُوذُ بِكَ مِن أَن أَظْلِمَ أَو أُظْلَمَ', transliteration:'Allāhumma innī aʿūdhu bika minal-faqri wal-qillati wadh-dhillati wa aʿūdhu bika min an aẓlima aw uẓlam', translation:'O Allah, I seek refuge in You from poverty, scarcity, and humiliation, and I seek refuge in You from wronging others or being wronged.', source:'Sunan Abu Dawud 1544, Sahih' },
      allahName: { arabic:'يَا حَافِظ', latin:'Ya Haafidh', meaning:'The Guardian, The Protector', relevance:'Al-Haafidh guards and protects. The same Allah who protected Ibrahim in the fire, Musa in the sea, and Yunus in the whale — protects you now.' },
      reflection:'Fear is natural. Even the prophets felt it. But they kept moving forward, trusting in Allah\'s protection. He has never abandoned a soul that turned to Him. He will not abandon you.'
    }
  ],

  jealous: [
    {
      quran: { arabic:'وَلَا تَتَمَنَّوْا مَا فَضَّلَ اللَّهُ بِهِ بَعْضَكُمْ عَلَىٰ بَعْضٍ', transliteration:'Wa lā tatamannaw mā faḍḍala llāhu bihi baʿḍakum ʿalā baʿḍ', translation:'And do not wish for that by which Allah has made some of you exceed others.', source:'Surah An-Nisa 4:32' },
      hadith: { text:'The Prophet ﷺ said: "Look at those who are below you and do not look at those who are above you, for that is more suitable that you should not consider as less the blessings of Allah upon you." He also said: "There is no envy except in two cases: a man whom Allah has given wealth and he spends it for the truth, and a man whom Allah has given wisdom and he judges by it."', source:'Sahih al-Bukhari 6490 & Sahih Muslim 816' },
      dua: { arabic:'اللَّهُمَّ قَنِّعْنِي بِمَا رَزَقْتَنِي وَبَارِكْ لِي فِيهِ وَاخْلُفْ عَلَيَّ كُلَّ غَائِبَةٍ لِي بِخَيْرٍ', transliteration:'Allāhumma qanniʿnī bimā razaqtanī wa bārik lī fīhi wakhluf ʿalayya kulla ghāʾibatin lī bikhayrin', translation:'O Allah, make me content with what You have provided me, bless me in it, and replace everything absent from me with something good.', source:'Al-Hakim, authenticated as Sahih' },
      allahName: { arabic:'يَا مُقَدِّر', latin:'Ya Muqaddir', meaning:'The Determiner, The Ordainer', relevance:'Al-Muqaddir determined what each person receives. What they have was written for them. What is written for you cannot go to another.' },
      reflection:'Their rizq is not your rizq. What Allah gives them does not reduce what He has for you — the ocean does not diminish when one cup is filled. Your portion is coming, in the right time.'
    }
  ],

  seeking: [
    {
      quran: { arabic:'وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا ۚ وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ', transliteration:'Walladhīna jāhadū fīnā lanahdiyannahum subulanā, wa innallāha lamaʿa l-muḥsinīn', translation:'And those who strive for Our cause — We will surely guide them to Our paths. And indeed, Allah is with the doers of good.', source:'Surah Al-Ankabut 29:69' },
      hadith: { text:'The Prophet ﷺ said: "Whoever treads a path seeking knowledge, Allah will make easy for him the path to Paradise." He also said: "Seeking knowledge is an obligation upon every Muslim."', source:'Sahih Muslim 2699 & Sunan Ibn Majah 224, Sahih' },
      dua: { arabic:'رَبِّ زِدْنِي عِلْمًا', transliteration:'Rabbi zidnī ʿilmā', translation:'My Lord, increase me in knowledge.', source:'Quran 20:114 — the only dua Allah commanded the Prophet ﷺ to ask for increase in' },
      allahName: { arabic:'يَا نُور', latin:'Ya Noor', meaning:'The Light', relevance:'An-Noor is the Light of the heavens and earth. He illuminates every dark path. Ask the Light to light your way.' },
      reflection:'The very fact that you are seeking means Allah is already drawing you. The movement toward Him is itself His gift. You are not lost — you are on the path.'
    }
  ],

  struggling: [
    {
      quran: { arabic:'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ ۚ وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', transliteration:'Wa man yattaqi llāha yajʿal lahu makhrajā, wa yarzuqhu min ḥaythu lā yaḥtasib, wa man yatawakkal ʿalallāhi fahuwa ḥasbuh', translation:'And whoever fears Allah — He will make a way out for him, and provide for him from where he did not expect. And whoever relies upon Allah — He is sufficient for him.', source:'Surah At-Talaq 65:2-3' },
      hadith: { text:'The Prophet ﷺ said: "If you were to rely upon Allah with the reliance He deserves, He would provide for you as He provides for the birds: they go out in the morning hungry and return in the evening full."', source:'Sunan al-Tirmidhi 2344, Sahih' },
      dua: { arabic:'اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّن سِوَاكَ', transliteration:'Allāhumma k-finī biḥalālika ʿan ḥarāmika wa aghnini bifaḍlika ʿamman siwāk', translation:'O Allah, suffice me with what You have made lawful against what You have made unlawful, and make me independent through Your grace from all besides You.', source:'Sunan al-Tirmidhi 3563, Hasan' },
      allahName: { arabic:'يَا رَزَّاق', latin:'Ya Razzaaq', meaning:'The Provider, The Sustainer', relevance:'Ar-Razzaq is the Provider — your sustenance is already written and cannot be taken by another. No economic situation is beyond His provision.' },
      reflection:'The birds do not know where tomorrow\'s food comes from — yet they fly. Do your part, make your tawakkul, and let Ar-Razzaq do His. He has never let a creation die of starvation while trusting in Him.'
    }
  ]
};

// ── ADHKAR PER MOOD ──────────────────────────
const moodAdhkar = {
  sad: [
    { arabic:'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', trans:'Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa huwa ʿalā kulli shayʾin qadīr', meaning:'None has the right to be worshipped except Allah, alone, with no partner. His is the dominion, His is all praise, and He is over all things capable.', count:'100× — the Prophet ﷺ said this equals freeing 10 slaves and removes 100 sins' },
    { arabic:'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ', trans:'SubḥānAllāhi wa biḥamdih', meaning:'Glory be to Allah and all praise is His', count:'100× — sins are forgiven even if like the foam of the sea (Sahih Muslim 2692)' }
  ],
  anxious: [
    { arabic:'حَسْبِيَ اللَّهُ لَا إِلَهَ إِلَّا هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ', trans:'Ḥasbiya llāhu lā ilāha illā huwa ʿalayhi tawakkaltu wa huwa rabbul-ʿarshil-ʿaẓīm', meaning:'Allah is sufficient for me. There is no deity except Him. In Him I put my trust, and He is the Lord of the Magnificent Throne.', count:'7× morning and evening — brings sufficiency (Abu Dawud, Sahih)' },
    { arabic:'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ', trans:'Bismillāhi lladhī lā yaḍurru maʿa smihi shayʾun fil-arḍi wa lā fis-samāʾ, wa huwas-samīʿul-ʿalīm', meaning:'In the name of Allah with whose name nothing can cause harm on earth or in the heavens, and He is the All-Hearing, All-Knowing.', count:'3× — nothing will harm you that day (Abu Dawud, Sahih)' }
  ],
  guilty: [
    { arabic:'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ', trans:'Astaghfirullāha wa atūbu ilayh', meaning:'I seek forgiveness from Allah and repent to Him.', count:'100× — the Prophet ﷺ did this daily (Sahih al-Bukhari 6307)' },
    { arabic:'رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنتَ التَّوَّابُ الرَّحِيمُ', trans:'Rabbi gh-fir lī wa tub ʿalayya innaka anta t-Tawwābur-Raḥīm', meaning:'My Lord, forgive me and accept my repentance. You are the Accepter of Repentance, the Merciful.', count:'The Prophet ﷺ said this 100× in a single sitting (Sahih al-Bukhari 6307)' }
  ],
  default: [
    { arabic:'سُبْحَانَ اللَّهِ', trans:'SubḥānAllāh', meaning:'Glory be to Allah', count:'33× after each prayer' },
    { arabic:'الْحَمْدُ لِلَّهِ', trans:'Alḥamdulillāh', meaning:'All praise and gratitude belong to Allah', count:'33× after each prayer' },
    { arabic:'اللَّهُ أَكْبَرُ', trans:'Allāhu Akbar', meaning:'Allah is the Greatest', count:'33× after each prayer' },
    { arabic:'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ', trans:'Lā ḥawla wa lā quwwata illā billāh', meaning:'There is no might nor power except through Allah', count:'Recite often — it is a treasure of Paradise (Sahih al-Bukhari 6384)' }
  ]
};

// ── DAILY AYAHS (rotates by day) ─────────────
const dailyAyahs = [
  { arabic:'إِنَّ مَعَ الْعُسْرِ يُسْرًا', trans:'Indeed, with hardship will be ease.', source:'Surah Ash-Sharh 94:6' },
  { arabic:'وَاللَّهُ يُحِبُّ الصَّابِرِينَ', trans:'And Allah loves the patient.', source:'Surah Al-Imran 3:146' },
  { arabic:'إِنَّ اللَّهَ مَعَ الَّذِينَ اتَّقَوْا وَالَّذِينَ هُم مُّحْسِنُونَ', trans:'Indeed, Allah is with those who fear Him and those who are doers of good.', source:'Surah An-Nahl 16:128' },
  { arabic:'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ', trans:'And whoever relies upon Allah — He is sufficient for him.', source:'Surah At-Talaq 65:3' },
  { arabic:'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا', trans:'For indeed, with hardship will be ease.', source:'Surah Ash-Sharh 94:5' },
  { arabic:'وَقُل رَّبِّ زِدْنِي عِلْمًا', trans:'And say: My Lord, increase me in knowledge.', source:'Surah Taha 20:114' },
  { arabic:'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ', trans:'Verily, in the remembrance of Allah do hearts find rest.', source:'Surah Ar-Ra\'d 13:28' },
  { arabic:'وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ', trans:'And He is with you wherever you are.', source:'Surah Al-Hadid 57:4' },
  { arabic:'اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا', trans:'Allah is the protector of those who have faith.', source:'Surah Al-Baqarah 2:257' },
  { arabic:'وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ', trans:'And your Lord is going to give you, and you will be satisfied.', source:'Surah Ad-Duha 93:5' },
  { arabic:'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ', trans:'Allah is sufficient for us, and He is the best Disposer of affairs.', source:'Surah Al-Imran 3:173' },
  { arabic:'إِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ', trans:'Indeed, Allah does not waste the reward of those who do good.', source:'Surah At-Tawbah 9:120' },
  { arabic:'وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ الْوَرِيدِ', trans:'And We are closer to him than his jugular vein.', source:'Surah Qaf 50:16' },
  { arabic:'رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا', trans:'Our Lord, let not our hearts deviate after You have guided us.', source:'Surah Al-Imran 3:8' },
  { arabic:'إِنَّ اللَّهَ مَعَ الصَّابِرِينَ', trans:'Indeed, Allah is with the patient.', source:'Surah Al-Baqarah 2:153' },
];

// ── 99 NAMES OF ALLAH ────────────────────────
const allahNames = [
  {n:1,ar:'اللَّهُ',latin:'Allah',meaning:'The One God',detail:'The name that encompasses all divine attributes. There is no god but He.'},
  {n:2,ar:'الرَّحْمَٰنُ',latin:'Ar-Rahman',meaning:'The Most Gracious',detail:'The One whose mercy encompasses all creation in this world, believer and disbeliever alike.'},
  {n:3,ar:'الرَّحِيمُ',latin:'Ar-Rahim',meaning:'The Most Merciful',detail:'The One whose mercy is specifically for the believers in the next life.'},
  {n:4,ar:'الْمَلِكُ',latin:'Al-Malik',meaning:'The King',detail:'The Absolute Ruler of all creation, the Master of the Day of Judgment.'},
  {n:5,ar:'الْقُدُّوسُ',latin:'Al-Quddus',meaning:'The Most Holy',detail:'The One who is free from all defects and imperfections.'},
  {n:6,ar:'السَّلَامُ',latin:'As-Salam',meaning:'The Source of Peace',detail:'The One from whom all peace flows; He greets the believers in Paradise with peace.'},
  {n:7,ar:'الْمُؤْمِنُ',latin:'Al-Mumin',meaning:'The Granter of Security',detail:'The One who gives safety and security to His believers.'},
  {n:8,ar:'الْمُهَيْمِنُ',latin:'Al-Muhaymin',meaning:'The Protector',detail:'The Guardian who watches over all things.'},
  {n:9,ar:'الْعَزِيزُ',latin:'Al-Aziz',meaning:'The Almighty',detail:'The One whose power cannot be overcome by any force.'},
  {n:10,ar:'الْجَبَّارُ',latin:'Al-Jabbar',meaning:'The Compeller',detail:'The One who repairs the broken and compels what is necessary.'},
  {n:11,ar:'الْمُتَكَبِّرُ',latin:'Al-Mutakabbir',meaning:'The Supreme',detail:'The One to whom all greatness belongs.'},
  {n:12,ar:'الْخَالِقُ',latin:'Al-Khaliq',meaning:'The Creator',detail:'The One who brings things into existence from nothing.'},
  {n:13,ar:'الْبَارِئُ',latin:'Al-Bari',meaning:'The Originator',detail:'The One who creates without any model or example.'},
  {n:14,ar:'الْمُصَوِّرُ',latin:'Al-Musawwir',meaning:'The Fashioner',detail:'The One who shapes all things into their perfect form.'},
  {n:15,ar:'الْغَفَّارُ',latin:'Al-Ghaffar',meaning:'The Repeatedly Forgiving',detail:'The One who forgives sins again and again, no matter how many times.'},
  {n:16,ar:'الْقَهَّارُ',latin:'Al-Qahhar',meaning:'The Subduer',detail:'The One who dominates and subdues all things.'},
  {n:17,ar:'الْوَهَّابُ',latin:'Al-Wahhab',meaning:'The Bestower',detail:'The One who gives freely and generously without expectation.'},
  {n:18,ar:'الرَّزَّاقُ',latin:'Ar-Razzaq',meaning:'The Provider',detail:'The One who provides sustenance to all creation without limit.'},
  {n:19,ar:'الْفَتَّاحُ',latin:'Al-Fattah',meaning:'The Opener',detail:'The One who opens doors of mercy, provision and solutions.'},
  {n:20,ar:'الْعَلِيمُ',latin:'Al-Alim',meaning:'The All-Knowing',detail:'The One whose knowledge encompasses all things, hidden and manifest.'},
  {n:21,ar:'الْقَابِضُ',latin:'Al-Qabid',meaning:'The Withholder',detail:'The One who withholds and restricts according to His wisdom.'},
  {n:22,ar:'الْبَاسِطُ',latin:'Al-Basit',meaning:'The Extender',detail:'The One who extends and expands provision and mercy.'},
  {n:23,ar:'الْخَافِضُ',latin:'Al-Khafid',meaning:'The Abaser',detail:'The One who humbles the arrogant.'},
  {n:24,ar:'الرَّافِعُ',latin:'Ar-Rafi',meaning:'The Exalter',detail:'The One who raises the status of those He wills.'},
  {n:25,ar:'الْمُعِزُّ',latin:'Al-Muizz',meaning:'The Bestower of Honour',detail:'The One who grants honour and might to whom He wills.'},
  {n:26,ar:'الْمُذِلُّ',latin:'Al-Mudhill',meaning:'The Humiliator',detail:'The One who humbles the unjust.'},
  {n:27,ar:'السَّمِيعُ',latin:'As-Sami',meaning:'The All-Hearing',detail:'The One who hears all sounds and whispers, even the innermost thoughts.'},
  {n:28,ar:'الْبَصِيرُ',latin:'Al-Basir',meaning:'The All-Seeing',detail:'The One who sees all things, even in complete darkness.'},
  {n:29,ar:'الْحَكَمُ',latin:'Al-Hakam',meaning:'The Judge',detail:'The One who judges all matters with perfect justice.'},
  {n:30,ar:'الْعَدْلُ',latin:'Al-Adl',meaning:'The Just',detail:'The One who is perfectly and absolutely just.'},
  {n:31,ar:'اللَّطِيفُ',latin:'Al-Latif',meaning:'The Subtle, The Kind',detail:'The One who is aware of the finest details and reaches His servants with His gentleness in unseen ways.'},
  {n:32,ar:'الْخَبِيرُ',latin:'Al-Khabir',meaning:'The All-Aware',detail:'The One who knows the inner reality of all things.'},
  {n:33,ar:'الْحَلِيمُ',latin:'Al-Halim',meaning:'The Forbearing',detail:'The One who is patient and does not hasten punishment.'},
  {n:34,ar:'الْعَظِيمُ',latin:'Al-Azim',meaning:'The Magnificent',detail:'The One whose greatness is beyond all imagination.'},
  {n:35,ar:'الْغَفُورُ',latin:'Al-Ghafur',meaning:'The Forgiving',detail:'The One who forgives and covers sins completely.'},
  {n:36,ar:'الشَّكُورُ',latin:'Ash-Shakur',meaning:'The Appreciative',detail:'The One who rewards even small acts of goodness abundantly.'},
  {n:37,ar:'الْعَلِيُّ',latin:'Al-Ali',meaning:'The Most High',detail:'The One who is above all in status and position.'},
  {n:38,ar:'الْكَبِيرُ',latin:'Al-Kabir',meaning:'The Most Great',detail:'The One whose greatness surpasses all description.'},
  {n:39,ar:'الْحَفِيظُ',latin:'Al-Hafiz',meaning:'The Preserver',detail:'The One who preserves and protects all things.'},
  {n:40,ar:'الْمُقِيتُ',latin:'Al-Muqit',meaning:'The Sustainer',detail:'The One who provides the needs of all creation.'},
  {n:41,ar:'الْحَسِيبُ',latin:'Al-Hasib',meaning:'The Sufficient',detail:'The One who suffices for all needs and takes account of all deeds.'},
  {n:42,ar:'الْجَلِيلُ',latin:'Al-Jalil',meaning:'The Majestic',detail:'The One who possesses all attributes of majesty and greatness.'},
  {n:43,ar:'الْكَرِيمُ',latin:'Al-Karim',meaning:'The Generous',detail:'The One whose generosity is unlimited and without any motive.'},
  {n:44,ar:'الرَّقِيبُ',latin:'Ar-Raqib',meaning:'The Watchful',detail:'The One who watches over all things at all times.'},
  {n:45,ar:'الْمُجِيبُ',latin:'Al-Mujib',meaning:'The Responsive',detail:'The One who responds to every dua made to Him.'},
  {n:46,ar:'الْوَاسِعُ',latin:'Al-Wasi',meaning:'The All-Encompassing',detail:'The One whose mercy, knowledge and provision are vast and boundless.'},
  {n:47,ar:'الْحَكِيمُ',latin:'Al-Hakim',meaning:'The Wise',detail:'The One whose every act and decree is filled with wisdom.'},
  {n:48,ar:'الْوَدُودُ',latin:'Al-Wadud',meaning:'The Loving',detail:'The One who loves His righteous servants and whom they love.'},
  {n:49,ar:'الْمَجِيدُ',latin:'Al-Majid',meaning:'The Most Glorious',detail:'The One who is glorious in all His attributes.'},
  {n:50,ar:'الْبَاعِثُ',latin:'Al-Baith',meaning:'The Resurrector',detail:'The One who will resurrect all creation on the Day of Judgment.'},
  {n:51,ar:'الشَّهِيدُ',latin:'Ash-Shahid',meaning:'The Witness',detail:'The One who witnesses all things at all times.'},
  {n:52,ar:'الْحَقُّ',latin:'Al-Haqq',meaning:'The Truth',detail:'The One who is the absolute truth and reality.'},
  {n:53,ar:'الْوَكِيلُ',latin:'Al-Wakil',meaning:'The Trustee',detail:'The One who is the perfect trustee of all affairs.'},
  {n:54,ar:'الْقَوِيُّ',latin:'Al-Qawiyy',meaning:'The All-Powerful',detail:'The One whose power is absolute and never diminishes.'},
  {n:55,ar:'الْمَتِينُ',latin:'Al-Matin',meaning:'The Firm',detail:'The One whose strength is unshakeable and firm.'},
  {n:56,ar:'الْوَلِيُّ',latin:'Al-Wali',meaning:'The Protecting Friend',detail:'The One who is the close helper and protector of the believers.'},
  {n:57,ar:'الْحَمِيدُ',latin:'Al-Hamid',meaning:'The Praiseworthy',detail:'The One who deserves all praise at all times.'},
  {n:58,ar:'الْمُحْصِي',latin:'Al-Muhsi',meaning:'The Counter',detail:'The One who counts and records every deed, large and small.'},
  {n:59,ar:'الْمُبْدِئُ',latin:'Al-Mubdi',meaning:'The Originator',detail:'The One who began creation from nothing.'},
  {n:60,ar:'الْمُعِيدُ',latin:'Al-Muid',meaning:'The Restorer',detail:'The One who will restore and recreate all things after death.'},
  {n:61,ar:'الْمُحْيِي',latin:'Al-Muhyi',meaning:'The Giver of Life',detail:'The One who gives life to whom He wills.'},
  {n:62,ar:'الْمُمِيتُ',latin:'Al-Mumit',meaning:'The Taker of Life',detail:'The One who causes death at the appointed time.'},
  {n:63,ar:'الْحَيُّ',latin:'Al-Hayy',meaning:'The Ever-Living',detail:'The One who is alive and never dies — eternal in existence.'},
  {n:64,ar:'الْقَيُّومُ',latin:'Al-Qayyum',meaning:'The Self-Subsisting',detail:'The One who sustains all creation while being dependent on nothing.'},
  {n:65,ar:'الْوَاجِدُ',latin:'Al-Wajid',meaning:'The Finder',detail:'The One who finds and achieves all He wills.'},
  {n:66,ar:'الْمَاجِدُ',latin:'Al-Majid',meaning:'The Noble',detail:'The One who is noble and gracious in His dealings.'},
  {n:67,ar:'الْوَاحِدُ',latin:'Al-Wahid',meaning:'The One',detail:'The One who is unique and singular in His essence.'},
  {n:68,ar:'الأَحَدُ',latin:'Al-Ahad',meaning:'The Unique',detail:'The One who has no partner, no equal, no comparison.'},
  {n:69,ar:'الصَّمَدُ',latin:'As-Samad',meaning:'The Eternal',detail:'The One upon whom all depend, but who depends on none.'},
  {n:70,ar:'الْقَادِرُ',latin:'Al-Qadir',meaning:'The Capable',detail:'The One who is able to do all things.'},
  {n:71,ar:'الْمُقْتَدِرُ',latin:'Al-Muqtadir',meaning:'The All-Powerful',detail:'The One who has full power over all things.'},
  {n:72,ar:'الْمُقَدِّمُ',latin:'Al-Muqaddim',meaning:'The Expediter',detail:'The One who places things in their proper place.'},
  {n:73,ar:'الْمُؤَخِّرُ',latin:'Al-Muakhkhir',meaning:'The Delayer',detail:'The One who delays things according to His wisdom.'},
  {n:74,ar:'الأَوَّلُ',latin:'Al-Awwal',meaning:'The First',detail:'The One who has no beginning — He existed before all creation.'},
  {n:75,ar:'الآخِرُ',latin:'Al-Akhir',meaning:'The Last',detail:'The One who has no end — He will remain after all creation ceases.'},
  {n:76,ar:'الظَّاهِرُ',latin:'Az-Zahir',meaning:'The Manifest',detail:'The One who is above all things, evident through His signs.'},
  {n:77,ar:'الْبَاطِنُ',latin:'Al-Batin',meaning:'The Hidden',detail:'The One who is hidden from sight, yet knows all inner realities.'},
  {n:78,ar:'الْوَالِي',latin:'Al-Wali',meaning:'The Governor',detail:'The One who governs all affairs of creation.'},
  {n:79,ar:'الْمُتَعَالِي',latin:'Al-Mutaali',meaning:'The Supreme',detail:'The One who is high and exalted above all.'},
  {n:80,ar:'الْبَرُّ',latin:'Al-Barr',meaning:'The Source of Goodness',detail:'The One who is the source of all goodness and treats His servants kindly.'},
  {n:81,ar:'التَّوَّابُ',latin:'At-Tawwab',meaning:'The Accepter of Repentance',detail:'The One who continually accepts the repentance of His servants.'},
  {n:82,ar:'الْمُنْتَقِمُ',latin:'Al-Muntaqim',meaning:'The Avenger',detail:'The One who takes retribution from the oppressors on behalf of the oppressed.'},
  {n:83,ar:'الْعَفُوُّ',latin:'Al-Afuww',meaning:'The Pardoner',detail:'The One who pardons completely — the sin is erased as though it never happened.'},
  {n:84,ar:'الرَّؤُوفُ',latin:'Ar-Rauf',meaning:'The Most Kind',detail:'The One who shows extreme kindness and compassion.'},
  {n:85,ar:'مَالِكُ الْمُلْكِ',latin:'Malik al-Mulk',meaning:'The Owner of Sovereignty',detail:'The One who possesses full and absolute sovereignty over all creation.'},
  {n:86,ar:'ذُو الْجَلَالِ وَالإِكْرَامِ',latin:'Dhu al-Jalal wal-Ikram',meaning:'Lord of Majesty and Bounty',detail:'The One who possesses both majesty and generosity simultaneously.'},
  {n:87,ar:'الْمُقْسِطُ',latin:'Al-Muqsit',meaning:'The Equitable',detail:'The One who establishes justice perfectly.'},
  {n:88,ar:'الْجَامِعُ',latin:'Al-Jami',meaning:'The Gatherer',detail:'The One who gathers all creation on the Day of Judgment.'},
  {n:89,ar:'الْغَنِيُّ',latin:'Al-Ghani',meaning:'The Self-Sufficient',detail:'The One who is free of all needs; all creation needs Him.'},
  {n:90,ar:'الْمُغْنِي',latin:'Al-Mughni',meaning:'The Enricher',detail:'The One who enriches whom He wills.'},
  {n:91,ar:'الْمَانِعُ',latin:'Al-Mani',meaning:'The Preventer',detail:'The One who withholds or prevents out of wisdom.'},
  {n:92,ar:'الضَّارُ',latin:'Ad-Darr',meaning:'The Distressor',detail:'The One who causes harm to come to whom He wills for a divine wisdom.'},
  {n:93,ar:'النَّافِعُ',latin:'An-Nafi',meaning:'The Propitious',detail:'The One who brings benefit and good to whom He wills.'},
  {n:94,ar:'النُّورُ',latin:'An-Nur',meaning:'The Light',detail:'The One who is the light of the heavens and the earth.'},
  {n:95,ar:'الْهَادِي',latin:'Al-Hadi',meaning:'The Guide',detail:'The One who guides whomever He wills to the right path.'},
  {n:96,ar:'الْبَدِيعُ',latin:'Al-Badi',meaning:'The Incomparable',detail:'The One who created things in a unique and unprecedented manner.'},
  {n:97,ar:'الْبَاقِي',latin:'Al-Baqi',meaning:'The Everlasting',detail:'The One who remains forever while all else perishes.'},
  {n:98,ar:'الْوَارِثُ',latin:'Al-Warith',meaning:'The Inheritor',detail:'The One who inherits all things after creation perishes.'},
  {n:99,ar:'الرَّشِيدُ',latin:'Ar-Rashid',meaning:'The Guide to the Right Path',detail:'The One who guides all matters to their right and proper conclusion.'},
];
