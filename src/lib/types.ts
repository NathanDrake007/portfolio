export enum ContentType {
  Pargraph = "paragraph",
  Image = "image",
  Code = "code",
  Link = "link",
  Heading = "header",
  List = "list",
  Divider = "divider",
}

interface ParagraphContent {
  text: string;
  style: {
    size: number;
    color: string;
    fontWeight: string;
  };
}

interface ImageContent {
  url: string;
  alt: string;
}

interface CodeBlockContent {
  code: string;
  lang: string;
}

interface LinkContent {
  url: string;
  text: string;
}

interface HeadingContent {
  text: string;
  style: {
    size: number;
    color: string;
    fontWeight: string;
  };
}

type Content =
  | { type: ContentType.Pargraph; data: ParagraphContent }
  | { type: ContentType.Image; data: ImageContent }
  | { type: ContentType.Code; data: CodeBlockContent }
  | { type: ContentType.Link; data: LinkContent }
  | { type: ContentType.Heading; data: HeadingContent };

export type {
  Content,
  HeadingContent,
  LinkContent,
  ParagraphContent,
  CodeBlockContent,
  ImageContent,
};
