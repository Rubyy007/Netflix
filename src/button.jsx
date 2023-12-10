import { Collapse } from 'react-bootstrap';
import { useState } from 'react';
function Buttoncl() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    return (
        <>

            <button
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text1"
                aria-expanded={open}
            >
                What is Netflix?
            </button>
            <Collapse in={open}>
                <div id="example-collapse-text1">
                    <p>

                        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                        <br/><br/>
                        You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                    </p>

                </div>
            </Collapse>
            <button
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text2"
                aria-expanded={open1}
            >
                How much does Netflix cost?
            </button>
            <Collapse in={open1}>
                <div id="example-collapse-text2">

                    <p>

                        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
                    </p>
                </div>
            </Collapse>
            <button
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text3"
                aria-expanded={open2}
            >
                Where can watch?
            </button>
            <Collapse in={open2}>
                <div id="example-collapse-text3">
                    <p>
                        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                        <br/><br/>
                        You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                    </p>
                </div>
            </Collapse>
            <button
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text4"
                aria-expanded={open3}
            >
                How do i cancel?
            </button>
            <Collapse in={open3}>
                <div id="example-collapse-text4">

                    <p>
                        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks.<br/><br/> There are no cancellation fees – start or stop your account anytime.

                    </p>
                </div>
            </Collapse>
            <button
                onClick={() => setOpen4(!open4)}
                aria-controls="example-collapse-text5"
                aria-expanded={open4}
            >
                what can i watch on Netflix?
            </button>
            <Collapse in={open4}>
                <div id="example-collapse-text5">
                    <p>
                        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.

                    </p>
                </div>
            </Collapse><br/>
            <h5 >Ready to watch? Enter your email to create or restart your membership.</h5>
            <div id='btnf'> 
            <input id='email1' type='text' placeholder='Email address' required />
            <button id='get1' >Get started</button>
            </div>
        </>
    );
}
export default Buttoncl