import { Link } from "react-router-dom"
import { TProps } from "./types"
import { motion } from 'motion/react'
import './index.scss'
export default function CommonButton(props: TProps) {


    return (<motion.div
        style={{ display: 'inline-block' }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1.05 }}
    >
        {
            props.isLink ? (
                <Link className="tool-commonButton poppins-font" to={props.to}>
                    {props.children}
                </Link>
            ) : (
                <span className="tool-commonButton poppins-font" onClick={props.handleOnClick}>
                    {props.children}
                </span>
            )
        }
    </motion.div>)
}
