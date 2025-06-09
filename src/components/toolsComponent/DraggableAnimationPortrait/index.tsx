import { motion, useMotionValue, useTransform } from 'motion/react'
import { useMemo, useState } from 'react';
import './index.scss'

export default function DraggableAnimationPortrait(props: {
    src: string,
    alt?: string,
    width: string,
    height: string,
    href?: string,
    tip?: string,
    tipColor?: string,
}) {
    // x和y为：鼠标拖拽的偏移量
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgScale = useTransform([x, y], ([xVal, yVal]: number[]) => {
        const squaredSum = xVal ** 2 + yVal ** 2;
        return 1 + Math.sqrt(squaredSum) / 600;
    })
    const [visibleTip, setVisibleTip] = useState(false);
    // const tipScale = useTransform();

    // 当拖拽头像时，将头像置于顶层，以防止别的头像遮住正在拖拽的头像
    const zIndex = useMemo(() => {
        return visibleTip ? 999 : 0;
    }, [visibleTip])

    const { width, height, alt = 'Portrait', href, tip, tipColor } = props;

    const MainBody = function (isLink: boolean = false) {
        return (
            <motion.div className={`draggableAnimationPortrait-wrapper 
                ${isLink ? ' draggableAnimationPortrait-link-hover' :
                    ' draggableAnimationPortrait-nolink-hover'} `}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                style={{ x, y, scale: imgScale, width, height, zIndex }}
                // onDrag={() => console.log(x.get(), y.get())}
                onDragStart={() => setVisibleTip(true)}
                onDragEnd={() => setVisibleTip(false)}
            >
                <motion.img
                    src={props.src} alt={alt} className="draggableAnimationPortrait-wrapper-photo"
                />
                {
                    visibleTip && (
                        <motion.div className='draggableAnimationPortrait-wrapper-tip'
                            initial={{
                                x: '-50%',
                                y: 100,
                                scale: 0.8,
                                opacity: 0.5,
                            }}
                            animate={{
                                x: '-50%',
                                y: 0,
                                scale: [0.8, 1.5, 1],
                                opacity: 1,
                            }}
                            transition={{
                                y: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15,
                                },
                                scale: {
                                    times: [0, 0.7, 1],
                                    duration: 0.5,
                                    repeat: Infinity,
                                }
                            }}
                            style={{
                                color: tipColor || undefined
                            }}
                        >
                            {tip || undefined}
                        </motion.div>
                    )
                }
            </motion.div>
        )
    }
    return (
        <>
            {
                href ? (
                    <motion.a drag href={href} style={{
                        borderRadius: '50%',
                    }}>
                        {MainBody(true)}
                    </motion.a>
                ) : (
                    <>
                        {MainBody()}
                    </>
                )
            }
        </>

    )
}
