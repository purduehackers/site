import type { GetServerSidePropsContext } from 'next'
import { Content } from '../components/sponsor/content'
import SponsorContent from '../components/sponsor/sponsor.mdx'

export default function Sponsor(): JSX.Element {
  const downloadPDF = async () => {
    const res = await fetch('/api/sponsor-page-pdf')
    const blob = await res.blob()
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'your-file.pdf'
    a.click()
  }
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b-4 bg-amber-400 print:bg-amber-400 border-black">
        <div className="py-16 flex flex-col gap-y-4">
          <h1 className="text-center text-4xl sm:text-7xl sm:tracking-tight font-bold flex justify-center items-center gap-2">
            <img
              src="/ph-logo-black.svg"
              alt="Logo"
              className="self-center flex-shrink-0 h-[1em] w-auto pointer-events-none"
            />
            Purdue Hackers
          </h1>
        </div>
      </header>
      <article className="mt-8 sm:mt-12 mb-8 sm:mb-12 text-lg font-serif flex flex-col items-start gap-y-4 justify-center w-11/12 sm:w-full max-w-2xl mx-auto">
        {/* {!isPuppeteerVisit && (
          <button onClick={downloadPDF}>Download PDF</button>
        )} */}
        <button onClick={downloadPDF}>Download PDF</button>
        <Content>
          <SponsorContent />
        </Content>
      </article>
    </div>
  )
}

// export function getServerSideProps(context: GetServerSidePropsContext) {
//   const isPuppeteerVisit = context.req.headers['Puppeteer-Visit'] === 'true'
//   return {
//     props: { isPuppeteerVisit }
//   }
// }
