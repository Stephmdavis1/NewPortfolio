import { DragControls, motion } from "framer-motion";


export default function ProjectList({ id, title, imageUrl, img, link, active, summary, setSelected}) {
    

    return (
        <motion.li 
            className={`text-xs m-4 lg:m-10 sm:text-sm md:text-md lg:text-lg p-2 rounded-lg cursor-pointer mb-10 text-center flex items-center 
           ${active ? "projectList active bg-dark outline-0 text-light" : "projectList"}`}
            onDragEnd={() => {
                setSelected(id)
              }}
            onClick={() => setSelected(id)}
            drag
            dragElastic={0.8}
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            // onDragEnd={() => setClicked(true)}
            whileHover={{ cursor: "grabbing" }}

        >
            {img}
            {title}
            {link}
            {imageUrl}
            {summary}
            
        </motion.li>
    );
}
