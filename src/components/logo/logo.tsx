import type { LinkProps } from '@mui/material/Link';

import { useId, forwardRef } from 'react';
import { mergeClasses } from 'minimal-shared/utils';

import Link from '@mui/material/Link';
import { styled, useTheme } from '@mui/material/styles';

import { RouterLink } from 'src/routes/components';

import { logoClasses } from './classes';

// ----------------------------------------------------------------------

export type LogoProps = LinkProps & {
  isSingle?: boolean;
  disabled?: boolean;
};

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>((props, ref) => {
  const { className, href = '/', isSingle = true, disabled, sx, ...other } = props;

  const theme = useTheme();

  const gradientId = useId();

  const TEXT_PRIMARY = theme.vars.palette.text.primary;
  const PRIMARY_LIGHT = theme.vars.palette.primary.light;
  const PRIMARY_MAIN = theme.vars.palette.primary.main;
  const PRIMARY_DARKER = theme.vars.palette.primary.dark;

  /*
    * OR using local (public folder)
    *
    const singleLogo = (
      <img
        alt="Single logo"
        src={`${CONFIG.assetsDir}/logo/logo-single.svg`}
        width="100%"
        height="100%"
      />
    );

    const fullLogo = (
      <img
        alt="Full logo"
        src={`${CONFIG.assetsDir}/logo/logo-full.svg`}
        width="100%"
        height="100%"
      />
    );
    *
    */

  // const singleLogo = (
  //   <svg
  //     width="119"
  //     height="32"
  //     viewBox="0 0 119 32"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M60.7801 0V19.1972H79.9773V25.5917H35.1884V19.1972H54.3856V12.8028H28.7939V32H86.3718V12.8028H67.1746V6.40829H111.95V12.8028H92.7525V32H118.344V0H60.7663H60.7801ZM111.964 25.5917H99.1608V19.1972H111.964V25.5917Z"
  //       fill="#F9F9F9"
  //     />
  //     <path
  //       fillRule="evenodd"
  //       clipRule="evenodd"
  //       d="M54.3876 6.39448V0H25.5917L15.9931 9.59862L6.39448 0H0V31.9862H6.39448V9.59862L15.9931 19.1972L28.7959 6.39448H54.3876Z"
  //       fill="#F9F9F9"
  //     />
  //   </svg>
  // );

  const singleLogo = (
    <svg
      width="119"
      height="32"
      viewBox="0 0 1492 737"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M197 144.5H233L260 149L287 158L309.5 170L326 183.5L339.5 200L344 207.5L345.5 155H470V735.5L468.5 737H345.5L344 537.5L333.5 552.5L324.5 563L303.5 579.5L282.5 590L266 596L233 602H198.5L170 597.5L134 585.5L105.5 570.5L84.5 555.5L66.5 539L54.5 527L36.5 503L18.5 468.5L6.5 432.5L2 410L0.5 398V353L5 323L14 291.5L26 263L41 237.5L60.5 213.5L78.5 195.5L98 180.5L120.5 167L147.5 155L176 147.5L197 144.5Z"
        fill="#383838"
      />
      <path
        d="M533 155H659L660.5 414.5L666.5 438.5L675.5 455L689 468.5L707 479L728 485H761L785 477.5L798.5 468.5L807.5 467V461L818 446L825.5 428L828.5 416L830 392V155H956V404L954.5 426.5L945.5 470L935 495.5L917 525.5L914 530H911L908 536L888.5 555.5L866 570.5L842 582.5L806 594.5L783.5 599L767 600.5H716L680 594.5L644 582.5L620 570.5L599 555.5L578 534.5L566 519.5L552.5 495.5L543.5 471.5L536 441.5L533 423.5V155Z"
        fill="#919191"
      />
      <path
        d="M1269.5 143H1290.5L1307 144.5L1311.5 147.5V272L1298 270.5L1268 266H1239.5L1217 270.5L1199 278L1182.5 288.5L1172 299L1161.5 315.5L1154 333.5L1149.5 351.5L1148 365L1146.5 590L1142 591.5H1020.5L1019 590V155H1146.5V227L1160 201.5L1172 186.5L1185.5 173L1206.5 159.5L1224.5 152L1245.5 146L1269.5 143Z"
        fill="#393939"
      />
      <path d="M1365.5 0.5H1491.5V590L1490 591.5H1367L1365.5 590V0.5Z" fill="#383838" />
      <path
        d="M225.5 258.5H254L278 264.5L300.5 276.5L317 290L329 305L341 327.5L347 350L348.5 360.5V386L344 408.5L336.5 428L327.5 443L314 458L300.5 470L278 482L255.5 488H225.5L201.5 482L179 470L161 453.5L150.5 441.5L138.5 419L132.5 399.5L131 390.5V354.5L137 332L149 308L158 296L164 288.5L183.5 273.5L201.5 264.5L225.5 258.5Z"
        fill="#FDFDFD"
      />
      <path
        d="M830 155H956V404L954.5 426.5L945.5 470L944 467L935 468.5H918.5V435.5H902V468.5H888.5L887 467V458H876.5V434H858.5V453.5H828.5L830 434L845 432.5L846.5 419H861.5V402.5H846.5L845 392H831.5L830 372.5V155Z"
        fill="#919191"
      />
      <path d="M533 155H659V326L653 327.5L533 326V155Z" fill="#373737" />
      <path
        d="M533 326H659L660.5 423.5L659 417.5H600.5V402.5H575L576.5 387.5H600.5L599 372.5H567.5V401L570.5 402.5H566L567.5 432.5L642.5 434V515H569L566 507.5V456.5L551 458V474.5L545 476L536 441.5L533 423.5V326Z"
        fill="#909090"
      />
      <path
        d="M830 155H956V404L954.5 426.5H950V387.5H917V372.5L918.5 371H933.5V326H917V312.5L918.5 311H933.5V296H903.5V326H888.5V281H876.5V264.5H888.5V279.5L902 281V245H888.5V228.5H902V213.5L918.5 215V200H902L900.5 171.5H876.5V200H846.5V326L830 327.5V155Z"
        fill="#3A3A3A"
      />
      <path
        d="M567.5 171.5H582.5V185H599V200H629V215H642.5V311L552.5 312.5L551 311V231.5H585.5V215H551V200H567.5V171.5Z"
        fill="#909090"
      />
      <path
        d="M902 213.5L918.5 215V245H932V231.5L933.5 230H948.5V213.5H956V404L954.5 426.5H950V387.5H917V372.5L918.5 371H933.5V326H917V312.5L918.5 311H933.5V296H903.5V326H888.5V281H876.5V264.5H888.5V279.5L902 281V245H888.5V228.5H902V213.5Z"
        fill="#373737"
      />
      <path
        d="M567.5 371H599L600.5 372.5V387.5H576.5V398L575 402.5H600.5V417.5H659V528.5L657.5 530H575L566 519.5L552.5 495.5L546.5 480.5V473L551 474.5V458L566 456.5L567.5 507.5L569 513.5L642.5 515V434H567.5L566 432.5V402.5L567.5 401L566 395V372.5L567.5 371Z"
        fill="#373737"
      />
      <path
        d="M672.5 500H689V530L704 528.5V515L747.5 513.5L749 515V528.5H762.5V515H782V500H798.5V548H782V530H765.5V548L764 549.5H749V561.5H731V599H714.5V561.5H672.5V546.5H687.5V530H672.5V500Z"
        fill="#373737"
      />
      <path
        d="M830 392H845L846.5 402.5H861.5V419H846.5V432.5L845 434H830V452L858.5 453.5V434H876.5V458H887L888.5 467H900.5L902 435.5H918.5V468.5L944 467L942.5 479L939.5 485H918.5V498.5H902V485H888.5V498.5H873.5V486.5L858.5 485V468.5H809L810.5 474.5V485H797L795.5 483.5V470L807.5 467V461L818 446L825.5 428L828.5 416L830 392Z"
        fill="#383838"
      />
      <path
        d="M954.5 213.5H956V404L954.5 426.5H950V387.5H917V372.5L918.5 371H933.5V326H917V312.5L918.5 311H933.5V281L948.5 279.5V254L950 230H954.5V213.5Z"
        fill="#393939"
      />
      <path d="M615.5 228.5H626V246.5H617V296H570.5V245H615.5V228.5Z" fill="#373737" />
      <path
        d="M918.5 155H956V212L948.5 213.5V230L933.5 231.5L932 245H918.5V215H933.5V183.5H918.5V155Z"
        fill="#919191"
      />
      <path
        d="M813.5 500H830V530H845V515H863V528.5L861.5 530H848V546.5H866V566L861.5 573.5L849.5 579.5H845V548H830V561.5H813.5V546.5H828.5V530H813.5V500Z"
        fill="#373737"
      />
      <path
        d="M584 453.5H599L600.5 455V467H615.5V455L617 453.5H627.5V468.5H617V485H626V498.5H582.5V455L584 453.5Z"
        fill="#373737"
      />
      <path
        d="M861.5 311H875L876.5 314L875 356H848V371L846.5 372.5H830V339.5L860 341V312.5L861.5 311Z"
        fill="#3A3A3A"
      />
      <path
        d="M600.5 155H659V185L632 183.5V171.5L642.5 170V162.5L630.5 161V168.5H615.5V185L600.5 183.5V155Z"
        fill="#919191"
      />
      <path
        d="M830 155H876.5L875 167L861.5 168.5L860 185H845V200H831.5L830 171.5V155Z"
        fill="#919191"
      />
      <path d="M551 339.5H621.5L630.5 341V356H549.5L551 339.5Z" fill="#373737" />
      <path d="M761 560H783.5V599H747.5V579.5H762.5L761 560Z" fill="#373737" />
      <path
        d="M954.5 213.5H956V341L954.5 359H948.5L950 327.5H954.5V296H933.5V281L948.5 279.5V254L950 230H954.5V213.5Z"
        fill="#919191"
      />
      <path d="M777.5 480.5H780.5V498.5H720.5V485H761L777.5 480.5Z" fill="#3C3C3C" />
      <path d="M860 371H902L903.5 372.5V387.5H858.5V372.5L860 371Z" fill="#373737" />
      <path d="M533 155H566L564.5 170H549.5V183.5H533V155Z" fill="#919191" />
      <path d="M615.5 546.5H659V561.5H624.5V566H615.5V546.5Z" fill="#373737" />
      <path d="M705.5 530H747.5V546.5H705.5V530Z" fill="#919191" />
      <path
        d="M645.5 371H657.5L659 372.5V401L657.5 402.5H633.5V386H644V372.5L645.5 371Z"
        fill="#3C3C3C"
      />
      <path
        d="M876.5 528.5H890L891.5 530V552.5L879.5 561.5H876.5L875 546.5V530L876.5 528.5Z"
        fill="#393939"
      />
      <path d="M933.5 155H956V185H948.5L950 171.5H939.5L933.5 170V155Z" fill="#373737" />
      <path d="M533 371H551V387.5H533V371Z" fill="#373737" />
      <path d="M902 339.5H917L918.5 341V356H902V339.5Z" fill="#373737" />
      <path d="M918.5 402.5H933.5V419H918.5V402.5Z" fill="#373737" />
      <path d="M902 515H921.5L918.5 522.5L914 530H902V515Z" fill="#3A3A3A" />
      <path d="M831.5 155H846.5V170L839 171.5L831.5 170V155Z" fill="#373737" />
      <path d="M533 215H543.5V228.5H533V215Z" fill="#919191" />
      <path d="M935 425H944V434L942.5 435.5H935L933.5 434V426.5L935 425Z" fill="#373737" />
    </svg>
  );

  const fullLogo = (
    <svg
      width="119"
      height="32"
      viewBox="0 0 119 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.7801 0V19.1972H79.9773V25.5917H35.1884V19.1972H54.3856V12.8028H28.7939V32H86.3718V12.8028H67.1746V6.40829H111.95V12.8028H92.7525V32H118.344V0H60.7663H60.7801ZM111.964 25.5917H99.1608V19.1972H111.964V25.5917Z"
        fill="#F9F9F9"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.3876 6.39448V0H25.5917L15.9931 9.59862L6.39448 0H0V31.9862H6.39448V9.59862L15.9931 19.1972L28.7959 6.39448H54.3876Z"
        fill="#F9F9F9"
      />
    </svg>
  );

  return (
    <LogoRoot
      ref={ref}
      component={RouterLink}
      href={href}
      aria-label="Logo"
      underline="none"
      className={mergeClasses([logoClasses.root, className])}
      sx={[
        () => ({
          width: 40,
          height: 40,
          ...(!isSingle && { width: 102, height: 36 }),
          ...(disabled && { pointerEvents: 'none' }),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      {isSingle ? singleLogo : fullLogo}
    </LogoRoot>
  );
});

// ----------------------------------------------------------------------

const LogoRoot = styled(Link)(() => ({
  flexShrink: 0,
  color: 'transparent',
  display: 'inline-flex',
  verticalAlign: 'middle',
}));
