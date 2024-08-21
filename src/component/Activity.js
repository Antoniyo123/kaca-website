import '../CSS/Section/Activity.css';
import React, { useEffect, useState } from "react";

const Activity = () => {
    const [displayedWord, setDisplayedWord] = useState("");
    const typingSpeed = 150; // Kecepatan mengetik dalam milidetik
    const wordDelay = 1000; // Jeda sebelum kata berikutnya muncul

    useEffect(() => {
        const words = ["Resonate,", "Inspire"];
        let wordIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        const type = () => {
            if (isDeleting) {
                setDisplayedWord(words[wordIndex].slice(0, charIndex));
                charIndex--;

                if (charIndex === 0) {
                    isDeleting = false;
                    wordIndex = (wordIndex + 1) % words.length;
                }
            } else {
                setDisplayedWord(words[wordIndex].slice(0, charIndex + 1));
                charIndex++;

                if (charIndex === words[wordIndex].length) {
                    isDeleting = true;
                    setTimeout(type, wordDelay); // Tunggu sebelum mulai menghapus
                    return;
                }
            }

            setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
        };

        type();
    }, [typingSpeed, wordDelay]);

    return (
        <div className="container">
            <div className="introduction">
          <p>We Can Help You to,</p>

      </div>
            {/* <div className="centered-content">
                <p>We are a talent management and influencer marketing company that</p>
                <p>has set an exemplary standard for delivering astute, sharp-focused</p>
                <p>and individualized representation that ensures success at all stages of</p>
                <p>its collaborators.</p>
            </div>
            <div className="centered-content-next">
                <p>We can bring your ideas to life in ways that</p>
            </div>
            <div className="scrolling-text">
                <p className="animated-text">{displayedWord}</p>
            </div>
            <div className="centered-content-text">
                <p className="title-text">Dynamic Faces Of Style</p>
                <p className="underline">______________________</p>
            </div> */}

        </div>
    );
}

export default Activity;
