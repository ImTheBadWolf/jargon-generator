jrg = {
    wordPool: [["TCP", "HTTP", "SDD", "RAM", "GB", "CSS", "SSL", "AGP", "SQL", "FTP", "PCI", "AI", "ADP", "RSS", "XML", "EXE", "COM", "HDD", "THX", "SMTP", "SMS", "USB", "PNG", "PHP", "UDP", "TPS", "RX", "ASCII", "CD-ROM", "CGI", "CPU", "DDR", "DHCP", "BIOS", "IDE", "IP", "MAC", "MP3", "AAC", "PPPoE", "SSD", "SDRAM", "VGA", "XHTML", "Y2K", "GUI"],
                ["auxiliary", "primary", "back-end", "digital", "open-source", "virtual", "cross-platform", "redundant", "online", "haptic", "multi-byte", "bluetooth", "wireless", "1080p", "neural", "optical", "solid state", "mobile", "unicode", "backup", "high speed", "56k", "analog", "fiber optic", "central", "visual", "ethernet"],
                ["driver", "protocol", "bandwidth", "panel", "microchip", "program", "port", "card", "array", "interface", "system", "sensor", "firewall", "hard drive", "pixel", "alarm", "feed", "monitor", "application", "transmitter", "bus", "circuit", "capacitor", "matrix", "address", "form factor", "array", "mainframe", "processor", "antenna", "transistor", "virus", "malware", "spyware", "network", "internet"],
                ["back up", "bypass", "hack", "override", "compress", "copy", "navigate", "index", "connect", "generate", "quantify", "calculate", "synthesize", "input", "transmit", "program", "reboot", "parse", "shut down", "inject", "transcode", "encode", "attach", "disconnect", "network"],
                ["backing up", "bypassing", "hacking", "overriding", "compressing", "copying", "navigating", "indexing", "connecting", "generating", "quantifying", "calculating", "synthesizing", "inputting", "transmitting", "programming", "rebooting", "parsing", "shutting down", "injecting", "transcoding", "encoding", "attaching", "disconnecting", "networking"]
            ],
    constructs: ["If we {3} the {2}, we can get to the {0} {2} through the {1} {0} {2}!", "We need to {3} the {1} {0} {2}!", "Try to {3} the {0} {2}, maybe it will {3} the {1} {2}!", "You can't {3} the {2} without {4} the {1} {0} {2}!", "Use the {1} {0} {2}, then you can {3} the {1} {2}!", "The {0} {2} is down, {3} the {1} {2} so we can {3} the {0} {2}!", "{4} the {2} won't do anything, we need to {3} the {1} {0} {2}!", "I'll {3} the {1} {0} {2}, that should {3} the {0} {2}!", "My {0} {2} is down, our only choice is to {3} and {3} the {1} {2}!", "They're inside the {2}, use the {1} {0} {2} to {3} their {2}!", "Send the {1} {2} into the {2}, it will {3} the {2} by {4} its {0} {2}!"]
};
var h = [];
function j(b) {
    for (var c = jrg.wordPool[b], e = Math.floor(Math.random() * c.length), f = c[e]; h.indexOf(f) > -1; )
        e++,
        e >= c.length && (e = 0),
        f = c[e];
    return h.push(f),
    f
};
function generateJargon() {
    let h = [];
    for (var b = Math.floor(Math.random() * jrg.constructs.length), c = jrg.constructs[b], e = 0; e < jrg.wordPool.length; e++)
        for (var f = "{" + e + "}"; c.indexOf(f) > -1; )
            c = c.replace(f, j(e));
    c = c.charAt(0).toUpperCase() + c.slice(1);
    return(c);
}
console.log(generateJargon());
