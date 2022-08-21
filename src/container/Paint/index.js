import { Stack } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PaintingArea from "./components/PaintingArea";
import Toolbar from "./components/Toolbar";


export default function Paint() {

    return (
        <Stack style={{ height: '100vh', width: '100%' }}>
            <Header />
            <Toolbar />
            <PaintingArea />
            <Footer />
        </Stack>
    );
}