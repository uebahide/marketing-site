import React from "react";

export default function Footer() {
  const footerMenu = [
    {
      title: "product",
      links: [
        { title: "What's New", link: "/" },
        { title: "Help and Support", link: "/" },
        { title: "Writing", link: "/" },
        { title: "Planning", link: "/" },
        { title: "Research", link: "/" },
        { title: "Styling", link: "/" },
        { title: "Pricing", link: "/pricing" },
        { title: "Education", link: "/" },
      ],
    },
    {
      title: "community",
      links: [
        { title: "Reddit", link: "/" },
        { title: "YouTube", link: "/" },
        { title: "Slack", link: "/" },
        { title: "Blog", link: "/" },
        { title: "Getting Started Guide", link: "/" },
        { title: "Contact", link: "/" },
        { title: "Template Gallery", link: "/pricing" },
      ],
    },
    {
      title: "company",
      links: [
        { title: "About", link: "/" },
        { title: "Press", link: "/" },
        { title: "Brand Assets", link: "/" },
        { title: "Affiliate Program", link: "/" },
        { title: "Careers", link: "/" },
      ],
    },
    {
      title: "legal",
      links: [
        { title: "Privacy", link: "/" },
        { title: "Terms", link: "/" },
        { title: "Security", link: "/" },
        { title: "ESG", link: "/" },
        { title: "Responsible Disclosure", link: "/" },
      ],
    },
    {
      title: "download",
      links: [
        { title: "Craft for iOS", link: "/" },
        { title: "Craft for iPad", link: "/" },
        { title: "Craft for macOS", link: "/" },
        { title: "Craft for Windows", link: "/" },
        { title: "Craft for Vision Pro", link: "/" },
      ],
    },
  ];

  return (
    <footer className="flex flex-col mx-auto  inset-x-0 px-[16px] py-8 max-w-6xl gap-[48px]">
      <div className="flex gap-20 flex-wrap">
        {footerMenu.map((menu) => (
          <div key={menu.title} className="flex flex-col gap-8">
            <h2 className="uppercase">{menu.title}</h2>
            <ul className="flex flex-col gap-2">
              {menu.links.map((item) => (
                <li key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <p>© 2025 Craft Docs Limited, Inc. All rights reserved.</p>
        <div>
          <select>
            <option>English</option>
            <option>日本語</option>
          </select>
        </div>
      </div>
    </footer>
  );
}
