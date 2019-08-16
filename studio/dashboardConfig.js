export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d56f4e04abbf696d44d65a8',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-tdo5xhq8',
                  apiId: '2c33c026-378b-4cfb-a1fa-b89a78187796'
                },
                {
                  buildHookId: '5d56f4e01b5c0ad232fec2b4',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4knzq749',
                  apiId: '36530d8f-bc67-4e3d-b949-0459b64fe7f2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/IT-SHABAB/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4knzq749.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
