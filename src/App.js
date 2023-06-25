import React from 'react';
import Section from './components/Section';
import Columns from './components/ThreeColums';
import ColumnText from './components/textColumn';
import ImageColumn from './components/image-column';
import Strip from './components/strip';
import Footer from './components/footer';
import landingPage from './assets/img1.jpg';
import brandSection from './assets/img2.jpg';

function App() {
  return (
    <div>
      <Section
        bgColor={'bg-black bg-opacity-80'} itemColor="dark"
        backgroundImage={landingPage}
        title={'We crush minimal design.'}
        description={"Mondichuri is a creative agencybased in Chigago. We developed the Carela Framework and built mobile-oriented templates for WordPress"}>
      </Section>

      <Section
        title={"We build experience."} itemColor="light"
        description={"A minimal approach is the only way to design a website."}
      >
        <Columns />
      </Section>

      <Section backgroundImage={brandSection} sectionStyle={'bg-black bg-opacity-80 h-auto'} itemColor="dark"
        title={"We design brands."}
        description={"A simple look is all you need to crush your competition."}
      >
        <ColumnText/>
      </Section>

      <Section itemColor="light" sectionStyle={'h-auto'}
        title="We create stories."
        description="A killer narative will turn your readers into raving fans."
      >
        <ImageColumn />
      </Section>

      <Strip/>

      <Footer sectionStyle={"h-auto"}/>

    </div>
  );
}

export default App;
