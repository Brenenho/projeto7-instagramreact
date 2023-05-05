import Posts from "./Posts"
import Sidebar from "./Sidebar"
import Stories from "./Stories"



export default function Body() {
    return (
        <div class="corpo">
            <div class="esquerda">
                <Stories />
                <Posts />

            </div>

            <Sidebar />
        </div>
    )
}