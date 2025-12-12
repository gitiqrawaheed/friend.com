import Scene01 from './components/Scene01'
import Scene02a from './components/Scene02a'
import Scene02b from './components/Scene02b'
import Scene03a from './components/Scene03a'
import Scene03b from './components/Scene03b'
import Scene04 from './components/Scene04'
import Scene05 from './components/Scene05'
import Scene06 from './components/Scene06'
import Scene07 from './components/Scene07'
import Scene08 from './components/Scene08'
import Scene09 from './components/Scene09'
import Scene10 from './components/Scene10'
import WordCloudScene from './components/WordCloudScene'
import TextBlock from './components/TextBlock'
import './App.css'

// Simplified scene components for remaining scenes
function Scene11() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh' }}>
      <TextBlock>
        <div style={{ marginBottom: '4rem' }}>
          <img src="/pictures/0025.png" alt="Graffiti" style={{ width: '100%', maxWidth: '650px', borderRadius: '8px', border: '1px solid #000', margin: '0 auto', display: 'block' }} />
        </div>
        <div>
          <img src="/pictures/0110.png" alt="Graffiti" style={{ width: '100%', maxWidth: '650px', borderRadius: '8px', border: '1px solid #000', margin: '0 auto', display: 'block' }} />
        </div>
      </TextBlock>
    </section>
  )
}

function Scene12() {
  return (
    <section className="scene-generic" style={{ minHeight: '150vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <img src="/pictures/avi schiffman photo.avif" alt="Avi Schiffman" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', padding: '4rem 2rem' }}>
        <TextBlock>
          Friend.com is a start-up founded by Avi Schiffmann, a 22-year-old entrepreneur who promised an artificial companion that would always listen. Schiffman built a wearable pendant that continuously records audio and communicates by text (San Francisco Standard 2024; Fortune 2024).
        </TextBlock>
      </div>
    </section>
  )
}

function Scene13() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        Schiffmann compared the device to a divine listener and used religious metaphors in his promotional language.
      </TextBlock>
      <TextBlock>
        He encouraged vandalism as part of the campaign by designing ads with large blank spaces. He claimed that the white space would prompt riders to write their opinions and that the conversation around the graffiti would generate attention for the product (Fortune 2024). Schiffman saw public space as a platform for affective marketing and emotional provocation.
      </TextBlock>
    </section>
  )
}

function Scene14() {
  return (
    <section className="scene-generic" style={{ minHeight: '150vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <img src="/pictures/why do you think i left so much white space?.webp" alt="Tweet" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.6)', zIndex: 1 }}></div>
      </div>
    </section>
  )
}

function Scene15() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <video autoPlay muted loop playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="/pictures/vid of archive (1).mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.7)', zIndex: 1 }}></div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto', padding: '4rem 2rem' }}>
        <TextBlock>
          To study how riders interpreted the campaign, I used the public archive at https://nyc-friends.vercel.app/all#NYC-0048.
        </TextBlock>
        <TextBlock>
          Commuters upload images of graffiti from Friend.com ads across the city (NYC Friends Graffiti Archive 2025). I collected 114 entries, extracted the text, and created a word frequency dataset. I found repeated use of terms that relate to moral and spiritual registers.
        </TextBlock>
        <TextBlock>
          These patterns suggested that riders interpreted as objects that made claims about the presence, and intimacy, as well as the authority of it all.
        </TextBlock>
      </div>
    </section>
  )
}

function Scene16() {
  const bookCovers = ['Engelke.webp', 'Orsi.jpg', 'Petro.png', 'Simmel.png', 'Weiner.png']
  return (
    <section className="scene-generic" style={{ minHeight: '250vh', padding: '4rem 2rem' }}>
      <TextBlock>
        I wanted to understand what the graffiti reveals about how New Yorkers interpret new technologies that make religion-like promises, and how these interpretations draw on religious concepts.
      </TextBlock>
      <TextBlock>
        I turned to readings from our Religion in the City course to build an analytical framework that captured what was at play here in NYC. I selected professor and cultural anthropologist Matthew Engelke, American religion scholar Isaac Weiner, German sociologist and philosopher Georg Simmel, American lived religion scholar Robert Orsi, and religion, gender, and visual culture scholar Anthony Petro because each author helps explain how people sense and then subsequently negotiate of presence in the city (Engelke 2012; Weiner 2013; Simmel 1950; Orsi 1999; Petro 2017).
      </TextBlock>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center', margin: '4rem 0' }}>
        {bookCovers.map((cover, i) => (
          <img key={i} src={`/pictures/${cover}`} alt={`Book cover ${i + 1}`} style={{ maxWidth: '200px', borderRadius: '8px', border: '1px solid #000' }} />
        ))}
      </div>
      <TextBlock>
        I organized my analysis around two themes.
      </TextBlock>
    </section>
  )
}

function Scene17() {
  return (
    <section className="scene-generic" style={{ minHeight: '300vh', padding: '4rem 2rem' }}>
      <TextBlock>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>Listening and the politics of surveillance</h2>
      </TextBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', margin: '4rem 0' }}>
        {['0001.png', '0013.png', '0019.png', '0075.png', '0086.png', '0088.png', '0097.png'].map((img, i) => (
          <img key={i} src={`/pictures/${img}`} alt={`Surveillance ${i + 1}`} style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
        ))}
      </div>
      <TextBlock>
        Weiner's work explains why the pendant's promise of constant listening provoked anxiety- specifically worries regarding technology projection and human development.
      </TextBlock>
    </section>
  )
}

function Scene18() {
  return (
    <section className="scene-generic" style={{ minHeight: '150vh', padding: '4rem 2rem' }}>
      <TextBlock>
        In the dataset, I found repeated phrases such as "spyware," "surveillance," and "listening demon" (NYC Friends Graffiti Archive 2024).
      </TextBlock>
      <div style={{ marginTop: '4rem' }}>
        <img src="/pictures/0086.png" alt="Graffiti" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000', margin: '0 auto', display: 'block' }} />
      </div>
    </section>
  )
}

function Scene19() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        Looking into the company's privacy policy…
      </TextBlock>
      <div style={{ background: '#000', padding: '2rem', fontFamily: 'monospace', color: '#fff', maxWidth: '800px', margin: '2rem auto', borderRadius: '8px' }}>
        <p style={{ lineHeight: '1.8', fontSize: '0.9rem' }}>
          By using the Services, you understand that the Device is passively recording your surroundings, including video and audio content that may contain personal information that is inappropriate, illegal, or unethical to collect. Privacy and video surveillance laws in your jurisdiction may apply to your use of Our products and Services. You are solely responsible for ensuring that you comply with all applicable laws when you use our products or Services. Capturing, recording or sharing video or audio content that involves other people, or capturing other people's facial feature information, may unlawfully affect their privacy rights. Friend will endeavor to filter inappropriate content out of its data collection, but You agree that Friend will not be held liable in any civil or criminal legal action that may arise from the content collected from the monitoring and recording.
        </p>
      </div>
      <TextBlock>
        The company expects the user to claim full responsibility for any legal repercussions that may come with the device's usage. It is your job to let everyone in your surrounding area know that they are being recorded and used for training purposes. It also expects the user to be okay with their lives being used to develop the technology further.
      </TextBlock>
    </section>
  )
}

function Scene20() {
  return (
    <section className="scene-generic" style={{ minHeight: '150vh', padding: '4rem 2rem' }}>
      <TextBlock>
        I am not a ludite, but suddenly this user agreement makes me feel like I am personally liable to let all of New York know I'm not far from a cop. And honestly, if this thing is recording every moment of my life, at what point in the night do I politely remove it so it does not critique my dating choices?
      </TextBlock>
      <div style={{ marginTop: '4rem' }}>
        <img src="/pictures/photo from friend.com official trailer.png" alt="Trailer screengrab" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000', margin: '0 auto', display: 'block' }} />
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '1rem' }}>
          Screengrab captured from the{' '}
          <a href="https://www.youtube.com/watch?v=O_Q1hoEhfk4" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.9)', textDecoration: 'underline' }}>
            Friend Reveal Trailer
          </a>
        </p>
      </div>
    </section>
  )
}

function Scene21() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        As expanded on by Weiner, this allows us to see how communities also negotiate what kinds of sound or listening belong in public space. The Friend.com campaign introduced a new form of undercover listening, and graffiti revealed that riders did not authorize this presence, labeling it as invasive and spiritually inappropriate. When a device claims to be "always listening," it enters the moral and political space of who gets to listen, who must be listened to, and who has authority over intimacy, which in this case, is a tech founder.
      </TextBlock>
      <TextBlock>
        New Yorkers reacted strongly to the idea of an AI pendant that listens all the time.
      </TextBlock>
      <TextBlock>
        Their graffiti "spyware," "listening demon" (NYC Friends Graffiti Archive 2025) shows that listening feels dangerous to the safety of New Yorkers when it is not chosen.
      </TextBlock>
    </section>
  )
}

function Scene22() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        These statues filled the streets with music and movement through the procession. Stopping, watching, responding, and even arguing were all results of the spectacle. Catholics and non-catholics alike all had varying emotions, as some felt pride, some annoyance, some fear. (Orsi 1999)
      </TextBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', margin: '4rem 0' }}>
        <div>
          <img src="/pictures/italian harlem 1.png" alt="Italian Harlem 1" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Screengrabs captured from Instagram.</p>
        </div>
        <div>
          <img src="/pictures/italian harlem 2.png" alt="Italian Harlem 2" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Screengrabs captured from Instagram.</p>
        </div>
      </div>
      <TextBlock>
        The Friend.com ads operated in a similar sensational form. They confronted riders through inescapable repetition and blankness. Riders responded by writing directly on them, and many comments interpreted the ads as spiritually intrusive, and declared to be blasphemous moral corruptions.
      </TextBlock>
    </section>
  )
}

function Scene23() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        Friend.com ads in the subway, unlike a Hare Krishna chant or a Falun Dafa stand
      </TextBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', margin: '4rem 0' }}>
        <div>
          <img src="/pictures/hare krishna.jpg" alt="Hare Krishna" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Rama Raya Prabhu. 2013. Rama Raya Prabhu Chants Hare Krishna at Times Square Subway Station. YouTube video, 3:18. Posted June 15, 2013.
          </p>
        </div>
        <div>
          <img src="/pictures/falun dafa.webp" alt="Falun Dafa" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            "Falun Dafa Club at Columbia." ezframecompany.com. Accessed December 11, 2025.
          </p>
        </div>
      </div>
      <TextBlock>
        were hard to ignore despite at the end of the day being an inanimate sheet. And so New Yorkers wrote over them, rejecting their presence in the shared space they use to navigate their home.
      </TextBlock>
    </section>
  )
}

function Scene24() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem' }}>
      <TextBlock>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>Conclusion</h2>
      </TextBlock>
      <TextBlock>
        At 59th Street- Columbus Circle, I saw stickers that linked to boycott campaigns against artificial intelligence. These stickers confirmed that the reactions to Friend.com were not isolated to this one endeavor alone. The linked website, <a href="https://boycottai.noblogs.org/" target="_blank" rel="noopener noreferrer">https://boycottai.noblogs.org/</a>, reflected broder conversations being held on the moral boundaries being pushed by technological influence. Graffiti, website stickers,
      </TextBlock>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', alignItems: 'center', margin: '4rem 0' }}>
        <div>
          <img src="/pictures/boycottsticker.png" alt="Boycott sticker" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Image courtesy of public NYC subway documentation.</p>
        </div>
        <div>
          <img src="/pictures/protest tweet.png" alt="Protest tweet" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000' }} />
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>Image courtesy of public NYC subway documentation.</p>
        </div>
      </div>
      <TextBlock>
        And the very archive from which I harness this data revealed a collective ethic embedded in the environment of the subway.
      </TextBlock>
    </section>
  )
}

function Scene25() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem', position: 'relative' }}>
      <TextBlock>
        Riders responded by denying the pendant's right to occupy a sacred position, one they have reserved for what they recognize as genuinely sacred, whether their icon is Jesus or Jay-Z.
      </TextBlock>
      <div style={{ margin: '4rem 0' }}>
        <img src="/pictures/jay z and jesus.jpeg" alt="Jay-Z and Jesus" style={{ maxWidth: '650px', width: '100%', borderRadius: '8px', border: '1px solid #000', margin: '0 auto', display: 'block' }} />
        <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem', marginTop: '0.5rem' }}>
          JAY-Z Daily (@JAY_Z_Daily). 2020. "Photo of Jay-Z standing in front of statue" (post and image). X, March 30, 2020.
        </p>
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, opacity: 0.3 }}>
        <img src="/pictures/robot priest background.jpg" alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
    </section>
  )
}

function Scene26() {
  return (
    <section className="scene-generic" style={{ minHeight: '200vh', padding: '4rem 2rem', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <img src="/pictures/crosssymbol.png" alt="Cross symbol" style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1)', transformOrigin: '71% 55%' }} />
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)', zIndex: 1 }}></div>
      </div>
      <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
        <TextBlock>
          When an idea enters public life and the people it hopes to serve reject its beliefs, the outcome shows that technologies do not define the social world. Communities always do, and each city negotiates these boundaries differently depending on its own histories and public sensibilities New Yorkers adopt a unique form of negotiation, because despite the city's range of lifestyles, residents share a civic instinct to confront powerful institutions and to refuse claims that threaten the social fabric they have worked to maintain. This ad marks a moment amongst many, of a new technology trying to claim emotional and spiritual presence over the world.
        </TextBlock>
        <TextBlock>
          <p style={{ fontSize: '1.3rem', fontWeight: '600', textAlign: 'center' }}>If there's one thing New York doesn't do, it is hold back.</p>
        </TextBlock>
      </div>
    </section>
  )
}

function Scene27() {
  return (
    <section className="scene-generic" style={{ minHeight: '100vh', padding: '4rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: '650px', padding: '2rem', background: 'rgba(255,255,255,0.25)', borderRadius: '8px', color: '#fff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold', fontSize: '1.5rem' }}>About This Project</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          This project was developed as the final assignment for Religion in the City, a course at Columbia University taught by Professor Courtney Bender and Cella Masso-Rivetti.
          The analysis draws on materials scraped from the NYC Friends Graffiti Archive (<a href="https://nyc-friends.vercel.app/all#NYC-0104" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'underline' }}>https://nyc-friends.vercel.app/all#NYC-0104</a>), using a custom data-collection script.
        </p>
        <p style={{ marginTop: '1.5rem' }}>
          For questions, comments, or collaborations, please contact:<br />
          Iqra Waheed - <a href="mailto:iw2240@columbia.edu" style={{ color: '#fff', textDecoration: 'underline' }}>iw2240@columbia.edu</a>
        </p>
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
      <Scene01 />
      <Scene02a />
      <Scene02b />
      <Scene03a />
      <Scene03b />
      <Scene04 />
      <Scene05 />
      <Scene06 />
      <Scene07 />
      <Scene08 />
      <Scene09 />
      <Scene10 />
      <WordCloudScene />
      <Scene11 />
      <Scene12 />
      <Scene13 />
      <Scene14 />
      <Scene15 />
      <Scene16 />
      <Scene17 />
      <Scene18 />
      <Scene19 />
      <Scene20 />
      <Scene21 />
      <Scene22 />
      <Scene23 />
      <Scene24 />
      <Scene25 />
      <Scene26 />
      <Scene27 />
    </div>
  )
}

export default App
