export function Loading() {
    return (
        <div className="fixed bg-slate-700 bg-opacity-60 top-0 left-0 z-50 flex h-screen w-screen items-center justify-center">
            <div className="h-24 w-24 rounded-full border-t-2 border-b-2 border-brand animate-spin" />
        </div>
    );
}
