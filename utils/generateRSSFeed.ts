"use server";
import RSS from 'rss';
import path from 'path';
import fs from 'fs';
// import postsM from '@/../model/posts';
export default async function generateRssFeed() {
    const site_url = 'localhost:3000';

    const feedOptions = {
        title: 'Blog posts | RSS Feed',
        description: 'Welcome to this blog posts!',
        site_url: site_url,
        feed_url: `${site_url}/rss.xml`,
        image_url: `${site_url}/logo.png`,
        pubDate: new Date(),
        copyright: `All rights reserved ${new Date().getFullYear()}, Ibas`,
    };
    // let allPosts = await postsM.findAll(500);
    let allPosts = [
        {
            title: "a",
            "description": "a",
            "slug": "a",
            date: new Date(),
        },
        {
            title: "b",
            "description": "b",
            "slug": "b",
            date: new Date(),
        },
        {
            title: "c",
            "description": "c",
            "slug": "c",
            date: new Date(),
        },
    ]
    const feed = new RSS(feedOptions);
    allPosts.map((post) => {
        feed.item({
            title: post.title,
            description: post.description,
            url: `${site_url}/blog/${post.slug}`,
            date: post.date,
        });
    });

    fs.writeFileSync(process.cwd() + '/public/rss.xml', feed.xml({ indent: true }));
}
