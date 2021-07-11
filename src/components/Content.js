import NavBar from './NavBar';
import './Content.css';
import Image from './Image';

export default function Content() {
    // const contentText= document.getElementById('content-text').innerHTML = contentText.replace(/(.{80})/g, "$1<br>");
    return (
        <>
        <NavBar/>
            <h1 className="content-title">How code takes over all passions and blossom fully</h1>
        <Image/>
            <p className="content-text">
                I started a career change in the field of development and programming without suspecting that this field would become a real passion. I have always been attracted to it but without really taking part in it. <br/><br/>
                I started courses and a program created by professional web developers by learning the fundamental languages for website and mobile web creation. <br/><br/>
                I often experiment in order to develop the creative side I have, not to fall into a certain routine, to try other paradigms. <br/><br/>
                These tests always teach me something, push me to discover more, to go further and to be able to share this to learn and try to make the world a better place! <br/><br/>
                Also this field with a worldwide influence allows to exchange with the world literally, isn't this the quintessence of this field? I think that's part of it.<br/><br/>
                Obviously spending hours finding a bug is not the happiest part but there is a certain indescribable satisfaction when the whole code works as we imagined it would and even more so when the basic model evolves and becomes truly amazing to us.<br/><br/>
                I think the most important thing is to be in tune with yourself obviously there will be projects that will be complicated but we will get there and from these parts there will always be a positive side.<br/>
                Staying human  eating healthy (drink some coffee so as not to sink into the keyboard, just kidding), doing sports, getting enough sleep, having human contact I think these elements are conducive to our well being.<br/><br/>
                I believe that skills precede passion and that loving to do something is a direct consequence of feeling fulfilled in a field. 
                To this day I continue to practice, learn new technologies, paradigms and most of all enjoy coding.
            </p>      
        </>
    )
}
