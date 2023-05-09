import { Grid, AspectRatio, Empty, Box, Docking, LoadingSpinner } from '@avsync.live/formation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

// import '@annotationhub/react-golden-layout/dist/css/goldenlayout-base.css';
// import '@annotationhub/react-golden-layout/dist/css/themes/goldenlayout-dark-theme.css';
// import { GoldenLayoutComponent } from '@annotationhub/react-golden-layout';

const PlaceholderContent = () => {
    return <Box px={.5}>
      <Grid maxWidth={10}>
        {
          new Array(60).fill(0).map(i =>
            <AspectRatio ratio={16/9}>
              <Empty />
            </AspectRatio>  
          )
        }
      </Grid>
    </Box>
  }

interface Props {
  
}

const test = ({ }: Props) => {
  const [layoutManager, setLayoutManager] = useState({})

  const [content, set_content] = useState(<S.LoadingContainer><LoadingSpinner /></S.LoadingContainer>)

  useEffect(() => {
    (async () => {
      const { GoldenLayoutComponent } = await import('@annotationhub/react-golden-layout')
      set_content(
        <GoldenLayoutComponent
          // (Required) Golden Layout Config. (See http://golden-layout.com/docs/Config.html)
          config={{
            settings: {
              showPopoutIcon: false,
              showMaximiseIcon: false,
              showCloseIcon: false,
              hasHeaders: true,
            },
            content: [
              {
                type: 'column',
                content: [
                  {
                    type: 'row',
                    content: [
                      
                      {
                        type: 'column',
                        content: [
                          {
                            component: () => <PlaceholderContent />,
                            title: 'Playlist'
                          }, 
                        ]
                      }
                    ]
                  },
                  {
                    type: 'row',
                    content: [
                      {
                        component: () => <PlaceholderContent />,
                        title: 'Visuals'
                      },
                      {
                        component: () => <PlaceholderContent />,
                        title: 'Effects'
                      },
                      {
                        component: () => <PlaceholderContent />,
                        title: 'Sources'
                      },
                    ]
                  }
                ]
              }
            ]
          }}
          autoresize={true}
          debounceResize={100}
          onLayoutReady={setLayoutManager}
        />
      )
    })()
  }, [])

  return (
    <S.DockingContainer>
      {
        content
      }
    </S.DockingContainer>
  );
}

export default test


const S = {
  DockingContainer: styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
  `,
  LoadingContainer: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `
}