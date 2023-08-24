/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2023 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


import definePlugin, { OptionType } from "@utils/types";
import { definePluginSettings, Settings } from "@api/Settings";
import { makeRange } from "@components/PluginSettings/components";

const settings = definePluginSettings({
    delay: {
        description: "Seconds delay",
        type: OptionType.SLIDER,
        markers: makeRange(1, 10, 1),
        default: 1,
        stickToMarkers: true,
    }
});

export const Devs = Object.freeze({
    nullAlt: {
        name: "null",
        badge: "https://cdn.discordapp.com/avatars/263777342210572298/62329b9af2fccbdc269241df9d24cab7.png",
        link: "https://github.com/nullydev",
        id: 456830858683351041n
    },
    null: {
        name: "null",
        badge: "https://cdn.discordapp.com/avatars/263777342210572298/62329b9af2fccbdc269241df9d24cab7.png",
        link: "https://github.com/nullydev",
        id: 263777342210572298n
    },
});

export default definePlugin({
    name: "F7Break",
    description: "Pause the client when you press F7 with DevTools (+ breakpoints) open. Also allows you to add seconds of delay to it.",
    authors: [Devs.null, Devs.nullAlt],
    settings,
    start() {
        window.addEventListener("keydown", this.event);
    },

    stop() {
        window.removeEventListener("keydown", this.event);
    },

    event(e: KeyboardEvent) {
        if (e.code === "F7") {
            // Hi! You've just paused the client. Pressing F7 in DevTools or in the main window will unpause it again.
            // It's up to you on what to do, friend. Happy travels!
            setTimeout(() => {
                debugger;
            }, secondsToMilliseconds(Settings.plugins.F7Break.delay));
        }
    }
});
function secondsToMilliseconds(seconds) {
    return seconds * 1000;
}