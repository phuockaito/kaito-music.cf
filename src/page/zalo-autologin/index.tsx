import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const STORAGE_KEY = "zalo_user_demo";

export default function ZaloAutoLogin() {
    const navigate = useNavigate();
    const { search } = useLocation();

    React.useEffect(() => {
        const params = new URLSearchParams(search);
        const zaloUser = params.get("zalo_user");

        if (zaloUser) {
            try {
                // demo-only: persist user id in localStorage
                window.localStorage.setItem(STORAGE_KEY, zaloUser);
            } catch (e) {
                // ignore storage errors in environments that block localStorage
                // fallback: still redirect
            }
            // navigate into the app root (replace history)
            navigate("/", { replace: true });
            return;
        }

        // If no zalo_user param, just redirect home
        navigate("/", { replace: true });
    }, [search, navigate]);

    return (
        <div style={{ padding: 24, color: "#fff" }}>
            Logging you into the mini app... If nothing happens, please wait.
        </div>
    );
}
