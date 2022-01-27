import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

const ContextMenu = () => {
    const [isMobile, setIsMobile] = useState(useMediaQuery({query: `(max-width: 1300px)`}));

    return (
        <div className="context-menu-container">
        </div>
    );
}

export default ContextMenu