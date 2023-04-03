const useRouter = jest.spyOn(require('next/router'), 'useRouter');

export function mockNextUseRouter(props: {
  route: string;
  pathname: string;
  query: string;
  asPath: string;
}) {
  let mockPathName = jest.fn();
  useRouter.mockImplementationOnce(() => ({
    route: props.route,
    pathname: props.pathname,
    query: props.query,
    asPath: props.asPath,
    push: jest.fn((path) => {
      mockPathName.mockReturnValue(path);
    }),
  }));
  return mockPathName;
}
