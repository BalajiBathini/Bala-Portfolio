// Typewriter.jsx
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Typewriter = ({ toRotate, period }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(200);

    // Convert the toRotate prop from string to an array
    const toRotateArray = JSON.parse(toRotate);

    useEffect(() => {
        const tick = () => {
            const i = loopNum % toRotateArray.length;
            const fullTxt = toRotateArray[i];

            setText((prevText) =>
                isDeleting ? fullTxt.substring(0, prevText.length - 1) : fullTxt.substring(0, prevText.length + 1)
            );

            // Adjust the speed for a smoother transition
            const nextDelta = isDeleting ? delta / 2 : 200 - Math.random() * 100;

            if (!isDeleting && text === fullTxt) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum((prevLoopNum) => prevLoopNum + 1);
                setDelta(500);
            } else {
                setDelta(nextDelta);
            }
        };

        const timer = setTimeout(tick, delta);
        return () => clearTimeout(timer);
    }, [text, isDeleting, delta, loopNum, period, toRotateArray]);

    return <span className="wrap">{text}</span>;
};

// Prop Types validation
Typewriter.propTypes = {
    toRotate: PropTypes.string.isRequired,
    period: PropTypes.number.isRequired,
};

export default Typewriter;
