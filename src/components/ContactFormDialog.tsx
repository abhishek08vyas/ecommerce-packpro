import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface ContactFormDialogProps {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

const ContactFormDialog = ({ open, onOpenChange }: ContactFormDialogProps) => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		company: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async () => {
		setIsSubmitting(true);

		// Simulate form submission
		await new Promise((resolve) => setTimeout(resolve, 1000));

		toast.success("Message sent successfully!", {
			description: "Our team will get back to you within 24 hours.",
		});

		setFormData({
			name: "",
			email: "",
			company: "",
			phone: "",
			subject: "",
			message: "",
		});
		setIsSubmitting(false);
		onOpenChange(false);
	};

	return (
		<Dialog
			open={open}
			onOpenChange={onOpenChange}
		>
			<DialogContent className="max-w-[95vw] sm:max-w-[550px] h-[95vh] sm:h-[90vh] max-h-[95vh] sm:max-h-[90vh] bg-white dark:bg-[hsl(253,45%,55%)] text-slate-900 dark:text-white p-0 overflow-hidden flex flex-col">
				<div className="px-6 pt-6 pb-4 border-b border-slate-200 dark:border-purple-400/50 shrink-0">
					<DialogHeader>
						<DialogTitle className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white">Contact Us</DialogTitle>
						<DialogDescription className="text-sm text-slate-600 dark:text-purple-100 mt-1.5">Fill out the form and we&apos;ll get back to you</DialogDescription>
					</DialogHeader>
				</div>
				<div className="overflow-y-auto flex-1 px-6 py-4 min-h-0">
					<div className="space-y-4">
						<div className="space-y-2">
							<Label
								htmlFor="contact-name"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Full Name *
							</Label>
							<Input
								id="contact-name"
								required
								value={formData.name}
								onChange={(e) => setFormData({ ...formData, name: e.target.value })}
								placeholder="John Doe"
								className="dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="contact-email"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Email *
							</Label>
							<Input
								id="contact-email"
								type="email"
								required
								value={formData.email}
								onChange={(e) => setFormData({ ...formData, email: e.target.value })}
								placeholder="john@company.com"
								className="dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="contact-company"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Company
							</Label>
							<Input
								id="contact-company"
								value={formData.company}
								onChange={(e) => setFormData({ ...formData, company: e.target.value })}
								placeholder="ABC Corporation"
								className="dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="contact-phone"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Phone *
							</Label>
							<Input
								id="contact-phone"
								type="tel"
								required
								value={formData.phone}
								onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
								placeholder="+1 (555) 000-0000"
								className="dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="contact-subject"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Subject *
							</Label>
							<Input
								id="contact-subject"
								required
								value={formData.subject}
								onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
								placeholder="How can we help you?"
								className="dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
						<div className="space-y-2">
							<Label
								htmlFor="contact-message"
								className="text-sm font-medium text-slate-900 dark:text-white"
							>
								Message *
							</Label>
							<Textarea
								id="contact-message"
								required
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })}
								placeholder="Tell us more..."
								rows={4}
								className="resize-none dark:border-purple-400/50 dark:placeholder:text-white/80 dark:text-white focus-visible:ring-offset-0 dark:focus-visible:ring-purple-300/50"
							/>
						</div>
					</div>
				</div>
				<div className="px-6 py-4 border-t border-slate-200 dark:border-purple-400/50 shrink-0">
					<div className="flex flex-col sm:flex-row gap-3">
						<Button
							type="button"
							variant="outline"
							size="lg"
							onClick={() => onOpenChange(false)}
							className="flex-1 w-full dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:border-white/20"
						>
							Cancel
						</Button>
						<Button
							type="button"
							variant="default"
							size="lg"
							disabled={isSubmitting}
							onClick={handleSubmit}
							className="flex-1 w-full"
						>
							{isSubmitting ? "Sending..." : "Send"}
						</Button>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default ContactFormDialog;
