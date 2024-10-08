import { MainContent } from "@/components/layout/main-content"
import { INTRODUCTION_ACTIONS, INTRODUCTION_MARKDOWN, INTRODUCTION_SUMMARY } from "@/docs/@overview/01-introduction"

export default function Introducao() {
  return (
    <MainContent
      breadCrumb={[{ title: "Introdução" }]}
      markdown={INTRODUCTION_MARKDOWN}
      summary={INTRODUCTION_SUMMARY}
      pagination={INTRODUCTION_ACTIONS}
    />
  )
}