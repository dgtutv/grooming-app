(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/Map.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/leaflet-src.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2d$2x$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/images/marker-icon-2x.png (static in ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/images/marker-icon.png (static in ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$shadow$2e$png__$28$static__in__ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/leaflet/dist/images/marker-shadow.png (static in ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/MapContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/TileLayer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-leaflet/lib/Circle.js [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
// Fix Leaflet's default icon paths so markers render correctly in Next.js builds
delete __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.prototype._getIconUrl;
__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$leaflet$2d$src$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Icon.Default.mergeOptions({
    iconRetinaUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2d$2x$2e$png__$28$static__in__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2d$2x$2e$png__$28$static__in__ecmascript$29$__["default"],
    iconUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2e$png__$28$static__in__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$icon$2e$png__$28$static__in__ecmascript$29$__["default"],
    shadowUrl: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$shadow$2e$png__$28$static__in__ecmascript$29$__["default"].src || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$leaflet$2f$dist$2f$images$2f$marker$2d$shadow$2e$png__$28$static__in__ecmascript$29$__["default"]
});
// Abbotsford, BC coordinates
const ABBOTSFORD_COORDS = [
    49.0504,
    -122.3045
];
const RADIUS_METERS = 40000; // 10 km radius
function Map() {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(2);
    if ($[0] !== "51480d1fdabf3641a8968ff85d4ac14d1baffe687e2ab4d4e5dedef903afa174") {
        for(let $i = 0; $i < 2; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "51480d1fdabf3641a8968ff85d4ac14d1baffe687e2ab4d4e5dedef903afa174";
    }
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$MapContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MapContainer"], {
            center: ABBOTSFORD_COORDS,
            zoom: 9.2,
            scrollWheelZoom: false,
            style: {
                height: "400px",
                width: "100%"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$TileLayer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TileLayer"], {
                    attribution: "\xA9 <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors",
                    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Map.jsx",
                    lineNumber: 36,
                    columnNumber: 8
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$leaflet$2f$lib$2f$Circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                    center: ABBOTSFORD_COORDS,
                    radius: RADIUS_METERS
                }, void 0, false, {
                    fileName: "[project]/src/app/components/Map.jsx",
                    lineNumber: 36,
                    columnNumber: 182
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/Map.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    return t0;
}
_c = Map;
const __TURBOPACK__default__export__ = Map;
var _c;
__turbopack_context__.k.register(_c, "Map");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/Map.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/Map.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_components_Map_jsx_324c8c32._.js.map