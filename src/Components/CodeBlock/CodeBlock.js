import React, { useState } from 'react';
import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import ContentCopyRounded from '@mui/icons-material/ContentCopyRounded';
import CheckRounded from '@mui/icons-material/CheckRounded';

const styles = {
  wrapper: {
    my: 4,
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: '12px',
    overflow: 'hidden',
    backgroundColor: '#001821',
  },
  header: {
    px: 2,
    py: 1,
    borderBottom: '1px solid rgba(255, 255, 255, 0.16)',
    backgroundColor: '#00121a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 2,
  },
  language: {
    fontSize: '0.8rem',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    color: 'rgba(255, 255, 255, 0.72)',
  },
  copyButton: {
    color: 'rgba(255, 255, 255, 0.86)',
  },
  pre: {
    m: 0,
    p: 2,
    overflowX: 'auto',
    whiteSpace: 'pre',
    lineHeight: 1.5,
    fontSize: {
      xs: '0.95rem',
      sm: '1rem',
    },
    '& code': {
      fontFamily: '"JetBrains Mono", "Fira Code", Menlo, Consolas, monospace',
      backgroundColor: 'transparent',
      fontSize: 'inherit',
      color: 'inherit',
    },
  },
};

function toText(node) {
  if (typeof node === 'string' || typeof node === 'number') {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map((child) => toText(child)).join('');
  }

  if (React.isValidElement(node)) {
    return toText(node.props?.children);
  }

  return '';
}

export default function CodeBlock({ children, ...props }) {
  const [copied, setCopied] = useState(false);
  const languageClass = React.isValidElement(children) ? children.props?.className || '' : '';
  const language = languageClass.startsWith('language-') ? languageClass.replace('language-', '') : 'code';
  const codeText = toText(children).replace(/\n$/, '');

  const handleCopy = async () => {
    if (!codeText || typeof window === 'undefined' || !window.navigator?.clipboard) {
      return;
    }

    try {
      await window.navigator.clipboard.writeText(codeText);
      setCopied(true);
      window.setTimeout(() => {
        setCopied(false);
      }, 1500);
    } catch (_) {
      setCopied(false);
    }
  };

  return (
    <Box sx={styles.wrapper}>
      <Box sx={styles.header}>
        <Typography sx={styles.language}>{language}</Typography>
        <Tooltip title={copied ? 'Copied' : 'Copy code'}>
          <IconButton
            onClick={handleCopy}
            sx={styles.copyButton}
            size="small"
            aria-label="Copy code block"
          >
            {copied ? <CheckRounded fontSize="small" /> : <ContentCopyRounded fontSize="small" />}
          </IconButton>
        </Tooltip>
      </Box>
      <Box
        component="pre"
        sx={styles.pre}
        {...props}
      >
        {children}
      </Box>
    </Box>
  );
}
