export default function FacebookPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-6">Últimas publicaciones</h1>

            <div className="flex justify-center">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?
            href=https://www.facebook.com/share/1BReBXHAJA/&
            tabs=timeline&
            width=500&
            height=800&
            small_header=false&
            adapt_container_width=true&
            hide_cover=false&
            show_facepile=true"
                    width="500"
                    height="800"
                    style={{ border: "none", overflow: "hidden" }}
                    scrolling="no"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
            </div>
        </div>
    );
}
