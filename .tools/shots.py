import sys
from playwright.sync_api import sync_playwright
base=sys.argv[1]
paths=[("home",""),("gala","award-night"),("sankofa","sankofa"),("nominate","nomination"),("tickets","tickets"),("gallery","gallery"),("album","gallery/gala-2025"),("nominees","gallery/nominees-2024"),("cawap","cawap"),("contact","contact")]
with sync_playwright() as p:
    b=p.chromium.launch()
    for tag,w,h in (("d",1440,900),("m",390,844)):
        ctx=b.new_context(viewport={"width":w,"height":h},device_scale_factor=1, reduced_motion="reduce")
        for name,path in paths:
            pg=ctx.new_page(); errs=[]
            pg.on("pageerror",lambda e: errs.append(str(e)))
            pg.goto(base+path,wait_until="networkidle")
            # scroll through so lazy images and reveals load
            H=pg.evaluate("document.body.scrollHeight")
            for y in range(0,H,600): pg.evaluate(f"window.scrollTo(0,{y})"); pg.wait_for_timeout(120)
            pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(1500)
            pg.screenshot(path=f"shots/{tag}_{name}.jpg",full_page=True,type="jpeg",quality=60)
            broken=pg.evaluate("[...document.images].filter(i=>i.complete && i.naturalWidth===0).map(i=>i.src).slice(0,5)")
            print(tag,name,"errors:",errs,"broken:",broken)
            pg.close()
        if tag=="d":
            pg=ctx.new_page(); pg.goto(base+"gallery/gala-2025",wait_until="networkidle")
            pg.click("button[aria-label^='Open photo 3']"); pg.wait_for_timeout(2500)
            pg.screenshot(path="shots/d_lightbox.jpg",type="jpeg",quality=60); pg.close()
    b.close()
