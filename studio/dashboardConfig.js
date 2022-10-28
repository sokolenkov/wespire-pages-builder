export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '635c47f31f24424f2bf2751c',
                  title: 'Sanity Studio',
                  name: 'test-studio-bvd4hh8g',
                  apiId: 'd4a45da1-dbcc-40f8-bd06-2bfabcc25570'
                },
                {
                  buildHookId: '635c47f3fbb8074a66f5006a',
                  title: 'Landing pages Website',
                  name: 'test-web-seo3695q',
                  apiId: 'dd94c1ac-87f6-47ab-8703-6ce883efd294'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sokolenkov/test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://test-web-seo3695q.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
