"use client";

import { type CSSProperties, type HTMLAttributes, type ReactNode } from "react";
import Image from "next/image";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
} & HTMLAttributes<HTMLDivElement>;

export function CardContainer({ children, className = "", containerClassName = "", ...rest }: ContainerProps) {
  return (
    <div className={`[perspective:1200px] ${containerClassName}`} {...rest}>
      <div className={`relative [transform-style:preserve-3d] transition-transform duration-300 will-change-transform hover:[transform:rotateX(6deg)_rotateY(-6deg)] ${className}`}>
        {children}
      </div>
    </div>
  );
}

type BodyProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function CardBody({ children, className = "", ...rest }: BodyProps) {
  return (
    <div className={`relative rounded-3xl border border-border bg-card p-6 [transform-style:preserve-3d] shadow-[0_10px_40px_-10px_rgb(0_0_0_/_.45)] ${className}`} {...rest}>
      {children}
    </div>
  );
}

type ItemProps = {
  as?: any;
  children: ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
} & HTMLAttributes<HTMLDivElement>;

export function CardItem({
  as: As = "div",
  children,
  className = "",
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}: ItemProps) {
  const style = {
    transform: `translate3d(${translateX}, ${translateY}, ${translateZ}) rotateX(${rotateX}) rotateY(${rotateY}) rotateZ(${rotateZ})`,
    transformStyle: "preserve-3d",
  } as CSSProperties;

  return (
    <As className={`relative will-change-transform ${className}`} style={style} {...rest}>
      {children}
    </As>
  );
}

// Convenience demo card
export function ThreeDCardDemo({ title, description, image }: { title: string; description: string; image?: string }) {
  return (
    <CardContainer>
      <CardBody className="aspect-[4/3] grid">
        {image ? (
          <CardItem className="absolute inset-0" translateZ={"40px"}>
            <Image src={image} alt="thumbnail" fill className="object-cover rounded-3xl" />
          </CardItem>
        ) : null}
        <CardItem translateZ={"60px"} className="self-start">
          <h3 className="text-lg font-semibold">{title}</h3>
        </CardItem>
        <CardItem translateZ={"50px"} className="self-end text-sm text-muted-foreground">
          {description}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}


