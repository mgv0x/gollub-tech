'use client';
import React from 'react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import Logo from '../Logo'; // Assuming Logo is in src/components

interface HeaderProps {
  onOpenDemo?: () => void;
}

export function Header({ onOpenDemo }: HeaderProps) {
	const [open, setOpen] = React.useState(false);
	const scrolled = useScroll(10);

	const links = [
		{ label: 'Visão Geral', href: '#sobre' },
		{ label: 'Como Funciona', href: '#como-funciona' },
		{ label: 'Hardware', href: '#dispositivo' },
		{ label: 'Plataforma', href: '#plataforma' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

    const handleLinkClick = () => {
        setOpen(false);
    }

	return (
		<header
			className={cn(
				'sticky top-0 z-50 w-full border-b border-transparent transition-all ease-out',
				{
					'bg-background/95 supports-[backdrop-filter]:bg-background/50 border-white/10 backdrop-blur-lg':
						scrolled && !open,
					'bg-background/90': open,
				},
			)}
		>
			<nav
				className="grid grid-cols-3 h-20 w-full max-w-[1400px] mx-auto items-center px-8 md:px-16 transition-all ease-out"
			>
				{/* Left: Logo (Column 1 - Shifted Right) */}
				<div className="flex items-center justify-start pl-16 md:pl-24">
					<a href="#" onClick={handleLinkClick} className="flex items-center">
						<Logo size="medium" />
					</a>
				</div>
				
				{/* Center: Links (Column 2 - Perfectly Centered) */}
				<div className="hidden items-center justify-center gap-6 md:flex">
					{links.map((link, i) => (
						<a key={i} className={cn(buttonVariants({ variant: 'ghost' }), 'text-base px-3 text-muted-foreground hover:text-foreground')} href={link.href}>
							{link.label}
						</a>
					))}
				</div>

				{/* Right: CTA / Mobile Menu (Column 3) */}
				<div className="flex justify-end items-center">
					<div className="hidden md:block">
						<Button className="rounded-full bg-white text-black hover:bg-gray-200 text-base px-6 py-5" onClick={onOpenDemo}>Solicitar Avaliação</Button>
					</div>
					<Button size="icon" variant="ghost" onClick={() => setOpen(!open)} className="md:hidden hover:bg-transparent">
						<MenuToggleIcon open={open} className="size-6 text-white" duration={300} />
					</Button>
				</div>
			</nav>

			<div
				className={cn(
					'bg-background/95 fixed top-16 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y border-border md:hidden backdrop-blur-xl',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:fade-in-0 data-[slot=closed]:animate-out data-[slot=closed]:fade-out-0 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-6',
					)}
				>
					<div className="grid gap-y-4 mt-8">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-xl py-6',
								})}
								href={link.href}
                                onClick={handleLinkClick}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-4 pb-8">
						<Button className="w-full text-lg py-6 bg-white text-black hover:bg-gray-200 rounded-full" onClick={() => { handleLinkClick(); if(onOpenDemo) onOpenDemo(); }}>
                            Solicitar Avaliação
                        </Button>
					</div>
				</div>
			</div>
		</header>
	);
}
