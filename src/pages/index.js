import * as React from "react"

// data
const links = [
  {
    text: "YouTube",
    url: "https://www.youtube.com/channel/UCicZ2KV8_1cIKPI_82KI_AQ",
  },
  {
    text: "Instagram",
    url: "https://www.instagram.com/onedrinkthreebars/",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/OneDrinkThreeB1",
  },
  {
    text: "Pinterest",
    url: "https://www.pinterest.com/onedrinkt/",
  },
  {
    text: "Facebook",
    url: "https://www.facebook.com/One-Drink-Three-Bars-100144599067941",
  },
]

// markup
const IndexPage = () => {
  return (
    <main>
      <ul>
        {links.map(link => (
          <li key={link.url}>
            <span>
              <a
                href={link.url}
              >
                {link.text}
              </a>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
