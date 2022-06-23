import { Route, Routes } from "react-router-dom";
import { Event } from "../../pages/index";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<Event/>}/>
            <Route path="/event/lesson/:slug" element={<Event/>}/>
        </Routes>
    )
}