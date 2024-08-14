export function Page(attrs: { title: string }, children: any) {
  return <>
    {`<!doctype html>`}
    <html>
      <head>
        <title>{attrs.title}</title>
        <link rel='stylesheet' href='/base.css' />
      </head>
      <body>
        <nav>
          <a href='/'>Home</a>
        </nav>
        <h1>{attrs.title}</h1>
        {children}
      </body>
    </html>
  </>;
}
