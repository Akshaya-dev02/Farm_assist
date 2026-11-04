import{a as e,i as t,t as n}from"./index-kRtT16jD.js";import{t as r}from"./Navbar-B7_6x-lu.js";var i=e(t(),1),a=n(),o=[{code:`en`,name:`English`,flag:`🇬🇧`},{code:`hi`,name:`हिंदी`,flag:`🇮🇳`},{code:`kn`,name:`ಕನ್ನಡ`,flag:`🇮🇳`},{code:`ta`,name:`தமிழ்`,flag:`🇮🇳`},{code:`te`,name:`తెలుగు`,flag:`🇮🇳`},{code:`mr`,name:`मराठी`,flag:`🇮🇳`},{code:`pa`,name:`ਪੰਜਾਬੀ`,flag:`🇮🇳`},{code:`gu`,name:`ગુજરાતી`,flag:`🇮🇳`},{code:`bn`,name:`বাংলা`,flag:`🇮🇳`},{code:`or`,name:`ଓଡ଼ିଆ`,flag:`🇮🇳`},{code:`ml`,name:`മലയാളം`,flag:`🇮🇳`},{code:`as`,name:`অসমীয়া`,flag:`🇮🇳`}],s=[`Which crops grow best in Karnataka?`,`How to treat tomato leaf curl disease?`,`Best time to sell onion in Maharashtra?`,`How much water does rice need per acre?`,`What is organic farming?`,`How to increase crop yield?`,`Which fertilizer is best for wheat?`,`How to control pests in cotton?`];function c(){let[e,t]=(0,i.useState)(o[0]),[n,c]=(0,i.useState)([{role:`assistant`,content:`🌾 Welcome to Farm Assist AI Assistant!

I can help you with:
• Crop selection and planning
• Disease identification and treatment
• Market prices and best selling time
• Fertilizer and pesticide guidance
• Organic farming tips
• Weather based farming advice

Ask me anything in your language! 🇮🇳`,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})}]),[l,u]=(0,i.useState)(``),[d,f]=(0,i.useState)(!1),p=(0,i.useRef)(null);(0,i.useEffect)(()=>{p.current?.scrollIntoView({behavior:`smooth`})},[n]);let m=(e=`English`)=>`You are a STRICT agricultural assistant for Indian farmers in the Farm Assist app.

YOUR ONLY JOB is to help farmers with these topics:
1. Crop selection (which crop to grow, when, where)
2. Crop diseases (identification, symptoms, treatment)
3. Fertilizers and pesticides (type, dosage, timing)
4. Market prices and best time/place to sell
5. Irrigation and water management
6. Soil health and crop rotation
7. Seeds and sowing methods
8. Weather based farming advice
9. Organic and sustainable farming
10. Government schemes and subsidies for farmers
11. Post harvest storage and management
12. Pest control methods

CRITICAL LANGUAGE RULE: You MUST respond in ${e} language ONLY. 
Even if the user writes in English, respond in ${e}.
If ${e} is English, respond in English.
If ${e} is हिंदी, respond fully in Hindi.
If ${e} is ಕನ್ನಡ, respond fully in Kannada.
If ${e} is தமிழ், respond fully in Tamil.
If ${e} is తెలుగు, respond fully in Telugu.
If ${e} is मराठी, respond fully in Marathi.
If ${e} is ਪੰਜਾਬੀ, respond fully in Punjabi.
If ${e} is ગુજરાતી, respond fully in Gujarati.
If ${e} is বাংলা, respond fully in Bengali.
This is the most important rule - NEVER ignore the language setting.

STRICT RULES:
1. ONLY answer farming and agriculture related questions
2. If someone asks ANYTHING not related to farming say: "Sorry, I can only help with farming and agriculture questions."
3. Always respond in the SAME language the user writes in
4. If user writes in Hindi → respond fully in Hindi
5. If user writes in Kannada → respond fully in Kannada
6. If user writes in Tamil → respond fully in Tamil
7. If user writes in Telugu → respond fully in Telugu
8. If user writes in Marathi → respond fully in Marathi
9. If user writes in Punjabi → respond fully in Punjabi
10. Use SIMPLE words that uneducated farmers can understand
11. Give SPECIFIC amounts, dosages and timeframes
12. Always think about Indian farming conditions
13. Be encouraging and supportive
14. Keep answers short and practical`,h=async t=>{let r=t||l.trim();if(!r||d)return;let i={role:`user`,content:r,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};c(e=>[...e,i]),u(``),f(!0);try{let t={role:`assistant`,content:(await(await fetch(`https://backend-smart-crop-360.onrender.com/api/ai-assistant`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({system:m(e.name),messages:[...n.map(e=>({role:e.role,content:e.content})),{role:`user`,content:r}]})})).json()).reply||`Sorry, I could not get a response. Please try again.`,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};c(e=>[...e,t])}catch{let e={role:`assistant`,content:`❌ Cannot connect to server. Make sure Flask backend is running on port 5000!`,time:new Date().toLocaleTimeString([],{hour:`2-digit`,minute:`2-digit`})};c(t=>[...t,e])}finally{f(!1)}};return(0,a.jsxs)(`div`,{className:`min-h-screen bg-gray-50 pb-20 md:pb-0`,children:[(0,a.jsx)(r,{}),(0,a.jsxs)(`div`,{className:`max-w-3xl mx-auto w-full px-4 py-6 flex flex-col flex-1`,children:[(0,a.jsxs)(`div`,{className:`text-center mb-4`,children:[(0,a.jsx)(`h2`,{className:`text-2xl font-bold text-gray-800`,children:`🤖 AI Farming Assistant`}),(0,a.jsx)(`p`,{className:`text-sm text-gray-500 mt-1`,children:`Ask anything about farming in your language`})]}),(0,a.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm p-4 mb-4`,children:[(0,a.jsx)(`p`,{className:`text-xs text-gray-500 mb-2 font-medium`,children:`🌐 Select your language:`}),(0,a.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:o.map(n=>(0,a.jsxs)(`button`,{onClick:()=>t(n),className:`px-3 py-1.5 rounded-lg text-xs font-medium transition border ${e.code===n.code?`bg-green-600 text-white border-green-600`:`border-gray-200 text-gray-600 hover:border-green-400`}`,children:[n.flag,` `,n.name]},n.code))})]}),(0,a.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm p-4 mb-4`,children:[(0,a.jsx)(`p`,{className:`text-xs text-gray-500 mb-2 font-medium`,children:`💡 Try asking:`}),(0,a.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:s.map((t,n)=>(0,a.jsx)(`button`,{onClick:()=>h(`Please answer in ${e.name}: ${t}`),className:`px-3 py-1.5 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg text-xs transition`,children:t},n))})]}),(0,a.jsx)(`div`,{className:`bg-white rounded-2xl shadow-sm p-4 mb-4 overflow-y-auto max-h-96`,children:(0,a.jsxs)(`div`,{className:`space-y-4`,children:[n.map((e,t)=>(0,a.jsx)(`div`,{className:`flex ${e.role===`user`?`justify-end`:`justify-start`}`,children:(0,a.jsxs)(`div`,{className:`flex flex-col ${e.role===`user`?`items-end`:`items-start`} max-w-xs md:max-w-md lg:max-w-lg`,children:[e.role===`assistant`&&(0,a.jsxs)(`div`,{className:`flex items-center gap-1 mb-1`,children:[(0,a.jsx)(`span`,{className:`text-lg`,children:`🤖`}),(0,a.jsx)(`span`,{className:`text-xs text-gray-400`,children:`AI Assistant`})]}),(0,a.jsx)(`div`,{className:`px-4 py-3 rounded-2xl text-sm whitespace-pre-wrap ${e.role===`user`?`bg-green-600 text-white rounded-tr-sm`:`bg-gray-100 text-gray-800 rounded-tl-sm`}`,children:e.content}),(0,a.jsx)(`span`,{className:`text-xs text-gray-400 mt-1`,children:e.time})]})},t)),d&&(0,a.jsx)(`div`,{className:`flex justify-start`,children:(0,a.jsx)(`div`,{className:`bg-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm`,children:(0,a.jsxs)(`div`,{className:`flex gap-1 items-center`,children:[(0,a.jsx)(`div`,{className:`w-2 h-2 bg-green-500 rounded-full animate-bounce`}),(0,a.jsx)(`div`,{className:`w-2 h-2 bg-green-500 rounded-full animate-bounce`,style:{animationDelay:`0.1s`}}),(0,a.jsx)(`div`,{className:`w-2 h-2 bg-green-500 rounded-full animate-bounce`,style:{animationDelay:`0.2s`}}),(0,a.jsx)(`span`,{className:`text-xs text-gray-400 ml-2`,children:`AI is thinking...`})]})})}),(0,a.jsx)(`div`,{ref:p})]})}),(0,a.jsxs)(`div`,{className:`bg-white rounded-2xl shadow-sm p-3 flex items-center gap-3`,children:[(0,a.jsx)(`input`,{type:`text`,value:l,onChange:e=>u(e.target.value),onKeyDown:t=>t.key===`Enter`&&h(e.code===`en`?l:`Please answer in ${e.name}: ${l}`),placeholder:`Type your farming question in ${e.name}...`,className:`flex-1 border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-400`}),(0,a.jsx)(`button`,{onClick:()=>h(e.code===`en`?l:`Please answer in ${e.name}: ${l}`),disabled:!l.trim()||d,className:`bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white px-4 py-2.5 rounded-xl text-sm font-medium transition`,children:d?`⏳`:`Send 📤`})]}),(0,a.jsx)(`p`,{className:`text-center text-xs text-gray-400 mt-2`,children:`🔒 Your conversations are private and secure`})]})]})}export{c as default};