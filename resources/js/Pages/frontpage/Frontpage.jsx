import FrontpageLayout from "@/Layouts/FrontpageLayout";
import { Link, Head } from "@inertiajs/react";

export default function Frontpage() {
    return (
        <>
            <FrontpageLayout>
                <div>FrontPage</div>
                <div>Hero</div>
                <div>Product</div>
                <Link href={route("detailproduct")}>detail</Link>
            </FrontpageLayout>
        </>
    );
}
