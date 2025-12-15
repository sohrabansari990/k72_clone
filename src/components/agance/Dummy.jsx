import { motion } from "framer-motion";


export default function StackedPanels() {
  const panels = [
    { id: 1, color: "#222", text: "SECTION 1" },
    { id: 2, color: "#007b5f", text: "SECTION 2" },
    { id: 3, color: "#0051ff", text: "SECTION 3" },
    { id: 4, color: "#008080", text: "SECTION 4" },
  ];

  return (
    <div className="stack-container">
      {panels.map((panel, i) => (
        <motion.div
          key={panel.id}
          className="panel"
          style={{ background: panel.color }}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.5, once: false }}
        >
          {panel.text}
        </motion.div>
      ))}
    </div>
  );
}
