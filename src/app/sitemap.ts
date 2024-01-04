import { MetadataRoute } from 'next'
import categoryM from "@/../model/category"
import siteInfoM from '@/../model/siteInfo';
import postsM from '@/../model/posts';
import tagM from '@/../model/tag';

export default function sitemap(): MetadataRoute.Sitemap {

    return [
        {
            url: 'https://acme.com',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://acme.com/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://acme.com/blog',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
    ]
}
