import { html } from 'satori-html'

import type { OgBgType } from '../../src/types'

const accentByBgType: Record<OgBgType, string> = {
  plum: '#c9444f',
  dot: '#2f6f73',
  rose: '#b75572',
  particle: '#6d63b6',
}

export const ogImageMarkup = (
  authorOrBrand: string,
  title: string,
  bgType: OgBgType
) => {
  if (!['plum', 'dot', 'rose', 'particle'].includes(bgType))
    throw new Error(
      "The value of 'bgType' must be one of the following: 'plum', 'dot', 'rose', 'particle'."
    )

  const accent = accentByBgType[bgType]
  const safeTitle = title.length > 96 ? `${title.slice(0, 93)}...` : title

  return html`<div
    tw="relative flex w-full h-full overflow-hidden"
    style="display: flex; font-family: 'Inter'; background-color: #f8f6ef; background-image: linear-gradient(rgba(54, 47, 38, 0.075) 1px, transparent 1px), linear-gradient(90deg, rgba(54, 47, 38, 0.075) 1px, transparent 1px); background-size: 40px 40px;"
  >
    <div
      tw="absolute flex"
      style="left: 82px; top: 0; bottom: 0; width: 2px; background: ${accent}; opacity: 0.5;"
    ></div>
    <div
      tw="absolute flex"
      style="left: 0; right: 0; top: 92px; height: 2px; background: ${accent}; opacity: 0.22;"
    ></div>

    <div
      tw="absolute flex"
      style="display: flex; right: 78px; top: 58px; width: 290px; height: 184px; background: rgba(255, 253, 247, 0.86); border: 1px solid rgba(58, 49, 39, 0.16); transform: rotate(3deg);"
    >
      <div
        tw="absolute flex"
        style="left: 22px; right: 22px; top: 48px; height: 1px; background: rgba(47, 111, 115, 0.32);"
      ></div>
      <div
        tw="absolute flex"
        style="left: 22px; right: 22px; top: 86px; height: 1px; background: rgba(47, 111, 115, 0.24);"
      ></div>
      <div
        tw="absolute flex"
        style="left: 22px; right: 78px; top: 124px; height: 1px; background: rgba(47, 111, 115, 0.2);"
      ></div>
      <div
        tw="absolute flex"
        style="right: 24px; top: 22px; width: 52px; height: 18px; background: rgba(201, 68, 79, 0.16);"
      ></div>
    </div>

    <div
      tw="absolute flex"
      style="display: flex; right: 122px; bottom: 72px; width: 248px; height: 154px; background: rgba(255, 253, 247, 0.72); border: 1px solid rgba(58, 49, 39, 0.14); transform: rotate(-4deg);"
    >
      <div
        tw="absolute flex"
        style="left: 20px; top: 26px; width: 46px; height: 46px; border: 2px solid rgba(201, 68, 79, 0.34);"
      ></div>
      <div
        tw="absolute flex"
        style="left: 88px; right: 22px; top: 42px; height: 1px; background: rgba(47, 111, 115, 0.28);"
      ></div>
      <div
        tw="absolute flex"
        style="left: 88px; right: 50px; top: 80px; height: 1px; background: rgba(47, 111, 115, 0.2);"
      ></div>
    </div>

    <div
      tw="absolute flex flex-col"
      style="display: flex; flex-direction: column; left: 128px; top: 118px; width: 760px;"
    >
      <div
        tw="flex items-center"
        style="display: flex; align-items: center; gap: 18px"
      >
        <div
          tw="flex items-center justify-center"
          style="display: flex; align-items: center; justify-content: center; width: 84px; height: 84px; border: 2px solid #302b25; background: #fffdf7; color: #151515; font-size: 29px; letter-spacing: -1px;"
        >
          BB
        </div>
        <div
          tw="flex flex-col"
          style="display: flex; flex-direction: column; gap: 6px"
        >
          <div
            tw="flex"
            style="display: flex; color: #726b61; font-size: 27px; letter-spacing: 0.5px;"
          >
            ${authorOrBrand}
          </div>
          <div
            tw="flex"
            style="display: flex; color: ${accent}; font-size: 18px; letter-spacing: 3px;"
          >
            NOTE INDEX
          </div>
        </div>
      </div>

      <div
        tw="flex"
        style="display: flex; margin-top: 46px; color: #171717; font-size: 58px; line-height: 1.12; letter-spacing: 0;"
      >
        ${safeTitle}
      </div>

      <div
        tw="flex items-center"
        style="display: flex; align-items: center; gap: 16px; margin-top: 46px"
      >
        <div
          tw="flex items-center"
          style="display: flex; align-items: center; height: 28px; padding: 4px 12px; border: 1px solid rgba(48, 43, 37, 0.25); color: #534d45; font-size: 16px; letter-spacing: 2px;"
        >
          AI
        </div>
        <div
          tw="flex items-center"
          style="display: flex; align-items: center; height: 28px; padding: 4px 12px; border: 1px solid rgba(48, 43, 37, 0.25); color: #534d45; font-size: 16px; letter-spacing: 2px;"
        >
          CODING AGENTS
        </div>
        <div
          tw="flex items-center"
          style="display: flex; align-items: center; height: 28px; padding: 4px 12px; border: 1px solid rgba(48, 43, 37, 0.25); color: #534d45; font-size: 16px; letter-spacing: 2px;"
        >
          PRODUCT NOTES
        </div>
      </div>
    </div>

    <div
      tw="absolute flex"
      style="display: flex; left: 128px; bottom: 58px; color: #7e766b; font-size: 18px;"
    >
      bubblebrain.me
    </div>
    <div
      tw="absolute flex"
      style="display: flex; right: 76px; bottom: 44px; color: rgba(48, 43, 37, 0.18); font-size: 82px; letter-spacing: -3px;"
    >
      AI NOTES
    </div>
  </div>`
}
