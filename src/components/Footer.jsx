export function Footer() {
    return (
        <footer className="flex items-center justify-between">
            <div className="flex gap-x-6 items-center">
                <div className="flex items-center gap-x-1 text-xl">
                    <div className="w-10 h-5 bg-red-600 border border-black"></div>
                    <span>Siaga 1</span>
                </div>
                <div className="flex items-center gap-x-1 text-xl">
                    <div className="w-10 h-5 bg-yellow-300 border border-black"></div>
                    <span>Siaga 2</span>
                </div>
                <div className="flex items-center gap-x-1 text-xl">
                    <div className="w-10 h-5 bg-green-600 border border-black"></div>
                    <span>Siaga 3</span>
                </div>
                <div className="flex items-center gap-x-1 text-xl">
                    <div className="w-10 h-5 bg-blue-600 border border-black"></div>
                    <span>Aman</span>
                </div>
            </div>

            <div className="text-indigo-900 font-bold">
                Hak Cipta BPBD Kab Bekasi 2022
            </div>
        </footer>
    )
}