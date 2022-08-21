import { Stack } from "react-bootstrap";

export default function Header() {

    return (
        <Stack as="header" direction="horizontal"
            className="bg-white px-2 py-1 justify-content-between align-items-center border-bottom">
            <Stack direction="horizontal" gap={2}>
                <span>logo</span><span>save</span><span>undo</span>
            </Stack>
            <Stack className="text-secondary">
                <small>Created By Nidhal Bettaibi</small>
            </Stack>
        </Stack>
    )
}