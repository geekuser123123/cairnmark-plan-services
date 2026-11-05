# Photos and Background Video

All media is from Pexels and used under the [Pexels License](https://www.pexels.com/license/): free for
commercial use, with no attribution required. It's self-hosted in `src/assets/media/` and
compressed for the web. **None of the images show people.**

| Slot | File | Source |
|---|---|---|
| `heroVideo` | `hero.mp4`, `hero.webm`, `hero-poster.webp` (18 seconds, 1280px, muted, lightly color-graded) | [Salt Lake City Aerial (19910626)](https://www.pexels.com/video/salt-lake-city-aerial-19910626/) |
| `city` | `city.webp` | [Aerial View of a City by the Snowy Mountains (5972941)](https://www.pexels.com/photo/aerial-view-of-a-city-by-the-snowy-mountains-5972941/) |
| `office` | `office.webp` | [Snow-Capped Mountains and Salt Lake City Skyline (30255750)](https://www.pexels.com/photo/snow-capped-mountains-and-salt-lake-city-skyline-30255750/) |
| `guide` | `guide.webp` | [Stone Cairn on Misty Mountain Landscape (34324143)](https://www.pexels.com/photo/stone-cairn-on-misty-mountain-landscape-34324143/) |
| `intro` | `intro.webp` | [Snowy Wasatch Mountains in Salt Lake City (31204787)](https://www.pexels.com/photo/snowy-wasatch-mountains-in-salt-lake-city-31204787/) |
| `workspace` | `workspace.webp` | [Notebook and a Laptop on a Desk (5908723)](https://www.pexels.com/photo/notebook-and-a-laptop-on-a-desk-5908723/) |
| `admin` | `admin.webp` | [Black Twist Pen on Top of Open White Notebook (472311)](https://www.pexels.com/photo/black-twist-pen-on-top-of-open-white-notebook-472311/) |

The video loads only on screens 768px and wider, and only when reduced motion and data saver
are off. Everyone else sees the poster image.

To replace media, add a WebP file in `src/assets/media/`, update its slot, `alt` text and `pos`
in `site.config.mjs`, then run `node build.mjs`.
