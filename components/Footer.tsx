export function Footer() {
    return (
        <footer className="py-8 border-t border-white/5 bg-background">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} Mohammed Zamil. All rights reserved.</p>
            </div>
        </footer>
    );
}
