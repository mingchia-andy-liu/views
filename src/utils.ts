import { badgen } from 'badgen';

interface Options {
  style?: 'text' | 'badge';
  label?: string;
}

export const validateAndGetName = (url: URL) => {
  if (url.pathname !== '/') {
    throw new Error('not found');
  }

  const page = url.searchParams.get('page');
  if (page == null || page == '') {
    throw new Error('page target not found');
  }

  return page;
};

export const generateBadgeSvg = (name: string, value: string) => {
  return badgen({
    label: name,
    status: value,
    color: 'green',
  });
};

export const parseQueryString = (url: URL): Options => {
  const option: Options = {};
  const style = url.searchParams.get('style');
  if (style && (style == 'text' || style == 'badge')) {
    option.style = style;
  }

  const label = url.searchParams.get('label');
  if (label) {
    option.label = label;
  }

  return option;
};
