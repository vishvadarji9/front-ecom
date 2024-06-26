type Props = {
    params: {
        handle: string
    }
}

const BlogDetails = ({ params: { handle } }: Props) => {
    return <div>Hello {handle}</div>
}

export default BlogDetails